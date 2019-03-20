// @flow
import React from "react";
import { Link } from "gatsby";
import type { IMarkdownRemark } from "types/gatsby.flow";

import { parse } from "query-string";
import idx from "idx";

type IProps = {
  posts: Array<IMarkdownRemark | null> | null
};

export default class PostsList extends React.Component<IProps> {
  render() {
    const { posts } = this.props;
    const search =
      typeof window !== "undefined" ? parse(window.location.search) : {};
    if (!posts) return null;
    return (
      <div className="tile is-ancestor is-vertical">
        {posts
          .filter(
            node => search.showDraft || !idx(node, _ => _.frontmatter.draft)
          )
          .map(post => {
            if (!post) return null;
            const frontmatter = post.frontmatter;

            if (!frontmatter) return null;

            return (
              <div
                key={frontmatter.path}
                className="tile notification is-light is-child box"
              >
                <Link to={frontmatter.path} className="subtitle has-text-link">
                  {frontmatter.title}
                </Link>
              </div>
            );
          })}
      </div>
    );
  }
}
