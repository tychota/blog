// @flow

// #region global import
import React from "react";
// #endregion global import

// #region components
import Header from "components/Header";
import Footer from "components/Footer";
import PostsList from "components/PostsList";
import SEO from "components/SEO";
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
      <div className="layout">
        <SEO postImage={null} />
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
        <Footer />
      </div>
    );
  }
}
