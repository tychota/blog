---
path: "/using-swizzling-can-save-your-life-or-not"
date: "2018-10-22"
draft: false
title: "Using Swizzling to fix RN can save your life. Or Not."
tags: ["Objective C", "react-native", "ios", "android"]
excerpt: "To swizzle or not to swizzle, that is the question. Method swizzling is the process of changing the implementation of an existing selector."
---

# The problem

Today, an architect doing some post project service was asking me the following question !

> We had to fix a message passing issue from a WebView to react native app. Thus we went to WKWebView from UIWebView, using RN new features.
> But now, we have a bug. HTTP 302 (redirect) does not set cookies properly.
> What should I do ? Fork RN ?

# The digression

It is not to shame iOS but Android verbose syntax sometimes let’s more room to customize default behavior.

Example (java code from [a-year-of-react-native-ssl-pinning](http://www.madebymany.com/stories/a-year-of-react-native-ssl-pinning)): you can define a new HTTP client builder that does SSL pinning.

```java
package com.example.app;

import android.util.Log;

import com.facebook.react.modules.network.OkHttpClientProvider;
import com.facebook.react.modules.network.ReactCookieJarContainer;

import java.util.concurrent.TimeUnit;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.CertificatePinner;

public class OkHttpCertPin {
  private static String hostname = "*.your.service.com";
  private static final String TAG = "OkHttpCertPin";

  public static OkHttpClient extend(OkHttpClient currentClient){
    try {
      CertificatePinner certificatePinner = new CertificatePinner.Builder()
        .add(hostname, "sha256/YOUR_PUBLIC_KEY_HASH")
        .add(hostname, "sha256/YOUR_PUBLIC_KEY_HASH_BACKUP1")
        .add(hostname, "sha256/YOUR_PUBLIC_KEY_HASH_BACKUP2")
        .build();
      return currentClient.newBuilder().certificatePinner(certificatePinner).build();
    } catch (Exception e) {
      Log.e(TAG, e.getMessage());
    }
    return currentClient;
  }
}
```

And then modify you `MainActivity.java`:

```diff
+import com.example.app.OkHttpCertPin;
+import com.facebook.react.modules.network.OkHttpClientProvider;
+import okhttp3.OkHttpClient;

public class MainActivity extends ReactFragmentActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
+    rebuildOkHtttp();
  }

+  private void rebuildOkHtttp() {
+    OkHttpClient currentClient = OkHttpClientProvider.getOkHttpClient();
+    OkHttpClient replacementClient = OkHttpCertPin.extend(currentClient);
+    OkHttpClientProvider.replaceOkHttpClient(replacementClient);
+  }
}
```

And hop, you have new functionality.

---

iOS is less prone of builders, less object oriented (despite being called objective C ^^). So most of the libraries I know does not offer that customization (I'm pretty sure they are some, just I don't know them yet).

But objective C is a versatile language (and that is also doable in swift as they shared an almost common runtime), in the same sense as `javascript` (the prototype ~~code~~ hacks we used to see/write a while ago) is. You can do everything with it, including ~~destroying the world~~ remapping function.

And that is not that impressing: in many ways objective C internal looks like javascript prototype chain (that my analysis, don't claim that as a fact in interview).
Indeed in objective:

```objectivec
[obj method:argument];
```

It sends the message `method` with the argument `argument` to the object `obj`. Obj will map the message using a `Class Dispatch Table`. That is this dispatch table that each object possess and that you can hack on it to ~~mess up~~ hackily improve your program: looks like a javascript prototype, doesn't it ?

# Entering Swizzling (back on the topic)

First most of the concept come from [this article](https://medium.com/rocknnull/ios-to-swizzle-or-not-to-swizzle-f8b0ed4a1ce6?_branch_match_id=440752107783156620).
read it, it will be more correct that my paraphrase here. And then when you come back, you will see all the mistakes in this article ! ^^

**Swizzling is monkey patching, on steroids.** It's in the same time great and terrific.

Here is the gist:

```objectivec
#import <WebKit/WebKit.h>
#import <objc/runtime.h>
```

We want to override the functionality of WKWebKit so let’s import WebKit.

Let’s also import objective C runtime, which is mandatory for the swizzling process.

```objectivec
@implementation WKWebView (Cookie)
```

By defining a new fine with `@implementation <CLASS> (<CATEGORY>)` category in objective C, you define a category. It is like an extension of the first class. Note that you need to write `@implementation WKWebView (Cookie)` and not only `@implementation WKWebView` as the latest would require to re-implement all the class.

You can read more about that [here](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/CustomizingExistingClasses/CustomizingExistingClasses.html).

Let's now define the swizzling boilerplate (not dependent of the stuff you want to extend).

````objectivec{numberLines: true}
@implementation WKWebView (Cookie)

+ (void)load {
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    Class class = [self class];
    SEL originalSelector = @selector(loadRequest:);
    SEL swizzledSelector = @selector(swizzled_loadRequest:);
    Method defaultMethod = class_getInstanceMethod(class, originalSelector);
    Method swizzledMethod = class_getInstanceMethod(class, swizzledSelector);
    BOOL doesMethodExists = !class_addMethod(class, originalSelector, method_getImplementation(swizzledMethod), method_getTypeEncoding(swizzledMethod));

    if (doesMethodExists) {
      method_exchangeImplementations(defaultMethod, swizzledMethod);
    }
    else {
      class_replaceMethod(class, swizzledSelector, method_getImplementation(defaultMethod), method_getTypeEncoding(defaultMethod));
    }
  });
}

@end
```

Let’s break that down:

```objectivec
- (void)load {
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    // ....
  })
}
````

What about `load` function ? Quoting [apple](https://developer.apple.com/documentation/objectivec/nsobject/1418815-load?language=objc):

> Invoked whenever a class or category is added to the Objective-C runtime; implement this method to perform class-specific behavior upon loading.
> The order of initialization is as follows:
>
> 1. All initializers in any framework you link to.
> 1. All `+load` methods in your image.
> 1. All C++ static initializers and C/C++ `__attribute__`(constructor) functions in your image.
> 1. All initializers in frameworks that link to you.
>
> In addition:
>
> - A class’s `+load` method is called after all of its superclasses’ `+load` methods.
> - A category `+load` method is called after the class’s own `+load` method.

It is thus the best place to perform runtime logic !

We must ensure that the logic is done once only (as it is not idempotent if we do swizzling twice we go back to first place 🤪)!
We are using `dispatch_once` as per [apple doc](https://developer.apple.com/documentation/dispatch/1447169-dispatch_once).

```objectivec{numberLines: true}
- (void)load {
  // ....
  dispatch_once(&onceToken, ^{
    Class class = [self class];
    SEL originalSelector = @selector(loadRequest:);
    SEL swizzledSelector = @selector(swizzled_loadRequest:);
    Method defaultMethod = class_getInstanceMethod(class, originalSelector);
    Method swizzledMethod = class_getInstanceMethod(class, swizzledSelector);
  })
}
```

We get the class reference first.

Then we create two selectors:

> A selector is the name used to select a method to execute for an object, or the unique identifier that replaces the name when the source code is compiled. A selector by itself doesn’t do anything. It simply identifies a method.

I see them as the `WHERE methodName = "blabla"` of a hypothetical SQL query that would be:

```sql
SELECT Method FROM Class1 WHERE methodName = "blabla"
```

Small digression: `loadRequest:` means that the message has one parameter in objective C. No parameter would be `loadRequest` without the trailing `:`. Two arguments would be `loadRequest:secondArg:`. How weird.
Reading StackOverflow make it weirder. Some quotes:

> What you call a parameter name is actually part of the method name. This is difficult to understand if you know only languages like Java or C++ but the method name is actually split into several parts in obj-c. Your method name is not pan, it's pan:longitude: Usually you should try to write method names that read like a sentence, e.g panToLatitude:andLongitude: – Sulthan Jan 7 '12 at 19:17

or

> So change method name, because it is impossible to define name for the first param? – Tom Jan 7 '12 at 18:13
>
> @Tom, parameters don't really have names, but yes, you will need to change the method name. – Carl Norum Jan 7 '12 at 18:14

End of the ~~bashing~~digression.

We have two pointers to method, one to the original one or `defaultMethod`, one to the replacement one or `swizzledMethod`.

Let’s permute them and we are done.

```objectivec{numberLines: true}
- (void)load {
  // ....
  dispatch_once(&onceToken, ^{
    // ...
    BOOL doesMethodExists = !class_addMethod(class, originalSelector, method_getImplementation(swizzledMethod), method_getTypeEncoding(swizzledMethod));

    if (doesMethodExists) {
      method_exchangeImplementations(defaultMethod, swizzledMethod);
    } else {
      class_replaceMethod(class, swizzledSelector, method_getImplementation(defaultMethod), method_getTypeEncoding(defaultMethod));
    }
  })
}
```

For some reason I'm not sure to figure, there are two cases:

1. the method does not exist in the `Class Dispatch Table` yet (first call ??)
1. the method exists yet

So we need to handle both cases:

1. `doesMethodExists` will be false as adding the `class_addMethod` will return `YES` (true in objc, no joke) because adding a method will be a success so with the `!` it becomes `NO`. We only have to do `class_replaceMethod` to finish the permutation.
1. `doesMethodExists` will be true so we need to exchange existing implementation

```objectivec
@implementation WKWebView (Cookie)

+ (void)load {
  // .... see above
}

- (nullable WKNavigation *)swizzled_loadRequest:(NSURLRequest *)request {
  NSLog(@"Swizzling visit Source");

  return [self swizzled_loadRequest:request];
}
```

Now you just define a method `swizzled_loadRequest`.

If you want to call the parent, you need to call `[self swizzled_loadRequest]` as the original method is now the swizzled one.

Funny.

# Should I use this

Short. No.

Long. Maybe. That super practical to override a dependency of a dependency or a big framework (`RN`, `SDWebImage`).
But it can (will) break at upgrades. It will add pain to debugging.

Big power. Big responsibility.
