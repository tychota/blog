---
path: "/hunting-down-a-complex-text-input-on-ios"
date: "2018-10-23"
draft: true
title: "Hunting down a complexe react native bug in iOS"
tags: ["Objectif C", "react-native", "ios"]
excerpt: "The client noticed a wrong behaviour. The material input we were using on the project was changing
his color on error ... except for the secureText used for the password. The bug was not happening on android."
---

> **History of a bug**: from the bug detection to the fix (that may lead to a React Native PR).

# Prehistory

All started when our PO notifieed a weird glitch.

![weird glitch](./glitch.png)

# Problem solving

```js{1,4-10}
// @flow

// #region global import
import React from "react";
// #endregion global import

// #region components
import Header from "components/Header";
import PostsList from "components/PostsList";
// #endregion components

// #region types
import type { IMarkdownRemark } from "types/gatsby.flow";
// #endregion types

type IProps = {
  pageContext: {
    tagName: string,
    posts: Array<IMarkdownRemark | null> | null
  }
};

export default class AllTagsIndexTemplate extends React.Component<IProps> {
  render() {
    const { posts, tagName } = this.props.pageContext;

    return (
      <div>
        <section className="hero is-light is-bold">
          <Header />
          <hr className="hr is-marginless" />
          <section className="section">
            <div className="hero-body">
              <div className="container">
                <h1 className="subtitle is-2">
                  Posts About{" "}
                  <span className="has-text-weight-semibold is-capitalized">
                    {tagName}
                  </span>
                </h1>
              </div>
            </div>
          </section>
        </section>
        <div className="main container is-fluid">
          <PostsList posts={posts} />
        </div>
      </div>
    );
  }
}
```

Lorem ipsum dolor amet yOLO actually jean shorts man bun. Freegan trust fund blue bottle, taiyaki chillwave meh marfa humblebrag godard umami small batch. Small batch wayfarers irony XOXO shoreditch occupy. Gochujang freegan chambray meh, swag fam af DIY roof party etsy lo-fi subway tile mlkshk.

Cold-pressed fashion axe leggings franzen bicycle rights aesthetic. Vice etsy lyft blog, meh next level iceland tacos. Shaman aesthetic jean shorts lomo organic, vinyl photo booth shoreditch edison bulb. Scenester kogi activated charcoal, jean shorts food truck air plant forage literally.

Coloring book tbh bitters street art pour-over yr readymade iceland palo santo. Normcore umami cray, intelligentsia migas truffaut tacos. Meh food truck intelligentsia green juice brooklyn health goth 3 wolf moon tofu coloring book umami ethical. Enamel pin man braid meggings food truck, migas artisan edison bulb. La croix XOXO fixie vaporware poke fanny pack typewriter chia.

Selvage pickled activated charcoal, viral lumbersexual narwhal drinking vinegar YOLO truffaut blue bottle. Chicharrones celiac prism vice, waistcoat shabby chic kickstarter YOLO franzen polaroid selvage. Heirloom affogato tbh tote bag church-key selfies, austin PBR&B prism williamsburg chillwave post-ironic chicharrones. Mlkshk offal cray wolf, synth forage ennui hashtag celiac.

Cardigan cornhole succulents thundercats lumbersexual bitters roof party pork belly kogi knausgaard messenger bag skateboard tumeric. Mustache squid pork belly pickled. Church-key squid thundercats, marfa intelligentsia ethical la croix chartreuse. Four dollar toast butcher trust fund master cleanse sartorial 8-bit mixtape franzen listicle paleo austin. Kombucha ramps everyday carry portland. Squid kickstarter poutine raw denim, bespoke hoodie artisan migas man bun ennui leggings tumblr. Four loko disrupt freegan, coloring book slow-carb poke PBR&B master cleanse tumblr ugh af.

Oh. You need a little dummy text for your mockup? How quaint.

I bet you’re still using Bootstrap too…
