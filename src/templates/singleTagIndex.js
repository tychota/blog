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
        <Header />
        <div className="main container is-fluid">
          <h2 className="subtitle">
            Posts About{" "}
            <span className="has-text-weight-semibold is-capitalized">
              {tagName}
            </span>
          </h2>
          <PostsList posts={posts} />
        </div>
      </div>
    );
  }
}
