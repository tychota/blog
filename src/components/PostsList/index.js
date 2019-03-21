// @flow
import React from "react";
import { Link } from "gatsby";
import type { IMarkdownRemark } from "types/gatsby.flow";

import { parse } from "query-string";
import idx from "idx";
import { formatDistance } from "date-fns";

type IProps = {
  posts: Array<IMarkdownRemark | null> | null
};

export default class PostsList extends React.Component<IProps> {
  render() {
    const { posts } = this.props;
    const search =
      typeof window !== "undefined" ? parse(window.location.search) : {};
    const searchQP =
      typeof window !== "undefined" ? window.location.search : "";
    if (!posts) return null;

    return (
      <div className="grid">
        <div className="posts-list">
          {posts
            .filter(
              node => search.showDraft || !idx(node, _ => _.frontmatter.draft)
            )
            .map(post => {
              if (!post) return null;
              const frontmatter = post.frontmatter;

              if (!frontmatter) return null;

              return (
                <div key={frontmatter.path} className="box">
                  <Link
                    to={frontmatter.path}
                    className="title has-text-link is-3"
                  >
                    {frontmatter.title}
                  </Link>
                  {frontmatter.date ? (
                    <h4 className="subtitle is-4" style={{ marginTop: 10 }}>
                      {formatDistance(frontmatter.date, new Date(), {
                        addSuffix: true
                      })}
                    </h4>
                  ) : null}
                  {frontmatter.tags
                    ? frontmatter.tags.map(tag =>
                        tag ? (
                          <span
                            className="tag is-light is-medium"
                            style={{ marginRight: 10 }}
                          >
                            <Link to={`/tags/${tag}${searchQP}`} className="">
                              #{tag}
                            </Link>
                          </span>
                        ) : null
                      )
                    : null}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
