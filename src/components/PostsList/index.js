// @flow
import React from "react";
import { Link } from "gatsby";
import type { IMarkdownRemarkEdge } from "types/gatsby.flow";

type IProps = {
  posts: Array<IMarkdownRemarkEdge | null> | null
};

export default class PostsList extends React.Component<IProps> {
  render() {
    const { posts } = this.props;
    if (!posts) return null;
    return (
      <div className="tile is-ancestor is-vertical">
        {posts.map(post => {
          if (!(post && post.node && post.node.frontmatter)) return null;
          const { node } = post;
          if (!node) return null;
          const { frontmatter } = node;
          if (!frontmatter) return null;

          return (
            <div
              key={frontmatter.path}
              className="tile is-primary is-child box"
            >
              <Link to={frontmatter.path} className="subtitle">
                {frontmatter.title}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
