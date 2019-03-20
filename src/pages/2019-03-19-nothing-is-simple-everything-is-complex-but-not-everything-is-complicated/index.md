---
path: "/nothing-is-simple-everything-is-complex-but-not-everything-is-complicated"
date: "2019-03-19T15:45:40.802Z"
draft: true
title: "Everything is complex, but not everything is complicated"
tags: ["dan-abramov", "rant", "explication", "complixity"]
excerpt: ""
---

I decided to write an article in reaction to this "rant" tweet by [Dan](https://twitter.com/dan_abramov):

<!-- markdownlint-disable MD033-->
<blockquote class="twitter-tweet" data-lang="fr"><p lang="en" dir="ltr">I’m tired of the “You wrote a long article about X, therefore X is bad/confusing” attitude. I can write a long article about anything I find interesting.<br><br>But every time I put it out I regret it a little because somebody uses it as a way to discredit the topic.</p>&mdash; Dan Abramov (@dan_abramov) <a href="https://twitter.com/dan_abramov/status/1105632560288284672?ref_src=twsrc%5Etfw">13 mars 2019</a></blockquote>
<!-- markdownlint-enable MD033 -->

I personnaly share the rant and after a while, I thought it is worth writing about my personnal experience.

When I arrived at my first job, it was just after my high school.

I had done some python during high scool, as student project and as personnal project, so I had read python zen principles, especially:

```python
# ..
3. Simple is better than complex.
4. Complex is better than complicated.
# ..
```

Back at the time I was pretty much rookie for everything related to communication especailly how to market your and discuss with your client.

I learned the hard way that it is never a good idea to market anything as "simple" !

<!-- markdownlint-disable MD033-->
<blockquote class="twitter-tweet" data-conversation="none" data-lang="fr"><p lang="en" dir="ltr">But also. When people say “X is simple” (and we believe it) it’s usually well-intended but not really true. Nothing is that simple if you dig deep enough. And I would feel so pleased if you dug deeper and found something. UI engineering is still in its infancy. It’s fascinating.</p>&mdash; Dan Abramov (@dan_abramov) <a href="https://twitter.com/dan_abramov/status/1105643361162137600?ref_src=twsrc%5Etfw">13 mars 2019</a></blockquote>
<!-- markdownlint-enable MD033 -->

There is multiple reason to that:

- things are never simple, especially in computer science: when they look so, it is because people have done a great job to hide complexity via good abstraction
- when you market something as simple, you devaluate yourself: after all, your are an exeprt. It took you time to learn what you may fond "simple"
- moreover, you put yourself in a fix mindset situation where you now have to succeed, and if that is not the case, you have to hack a dirty solution: this is bad cause you will never learn what was not so simple after all

# Things are not simple

Let's look at it why an example:

> Client: You just need to fetch and display the user list. Simple ?

Lets focus on the first part of that: `fetch the user list`.

That is business point of view. That is the final value to the user, really high level, low technicity.

In practique, that means that smartphone of the client will get some electrical signal after some while when some touch captors while handle some press then change some pixel accordingly. That the actual physical phenomenon happening.

And in between, ... a sea of complexity !

## Application level

Somewhere in some language the app while do some call to retrive the user list.

Lets say, you will do an `HTTP GET https://superpoduct.com/users?filter=*` to the REST Endpoint users.

Only in that there is a lot of complexity:

- What is http? a protocol! What are the rules of this protocol?
- In particular what is `GET` and why use it to fetch (and not something else like `POST`)? Some other api `POST` everytimes, like GraphQL! Is it good or bad, when and why?
- How to specify the format we want to have, the external context parameters like the language/encoding of the results?
- What can fail? What will you receive if that fail? Lets say, status [401](https://http.cat/401), [403](https://http.cat/403)?
- What does this mean? Are the status good practices? Are you really sure you can't get something else, like a [503](https://http.cat/503) or a [429](https://http.cat/429) ?
- You will probably probably need to authenticate yourself? How? Session, server generated token or JWT? How secure are they? What are the pro and cons of JWT compared to session?
- You are using HTTPS! How does this works? What can be the flaws? Server side? Client side? How to verify that everything backend devs did is secure? Is there a chance that security can affect availability, on lower end device? What the impact? Is it super secure and if not what are the attack vector?
- If you get the result using rest, how can you being sure that backend devs, when changing the api, won't break the app.

It is already super complex, isn't it ?

## Network/Infrastructure level

- You did look for `superproduct.com`? How internet it knows which server it is?
- Are they only one server? Afterall, `superproduct` is really well known! How are the load balancing done? Is it resistant to failure (if a datacenter burn)? Is it consistant: what if every other calls, I'm logged out because I logged in on server A and I'm hitting server B?
- Even if the internet figure out the destination B? What the itinerary A -> x1 -> x2 -> x3 -> B? What if the information is supposed to pass by a route x2 but due to strike, the route x2 has super high traffic jam? What are the alternative itinerary? How to diagnose from A and what to do?

# Todo

<!-- markdownlint-disable MD033-->
<blockquote class="twitter-tweet" data-conversation="none" data-lang="fr"><p lang="en" dir="ltr">You can think of this as a challenge if you’re working on a thing whose marketing is around being “simple”. Tell me the gnarly bits. The weird parts. The tradeoffs. The months of thinking behind a choice. Not the stuff you would put on the landing page. I want to know.</p>&mdash; Dan Abramov (@dan_abramov) <a href="https://twitter.com/dan_abramov/status/1105648932351344640?ref_src=twsrc%5Etfw">13 mars 2019</a></blockquote>
<!-- markdownlint-enable MD033 -->
