// @flow
import React from "react";
import { Link } from "gatsby";

import { parse } from "query-string";

type ITag = {
  name: string | null,
  hasOnlyDraft: boolean | null
};
type IProps = {
  tags: Array<ITag> | null
};

export default class TagsList extends React.Component<IProps> {
  render() {
    const { tags } = this.props;
    const search =
      typeof window !== "undefined" ? parse(window.location.search) : {};
    const searchQP =
      typeof window !== "undefined" ? window.location.search : "";

    return (
      <div className="grid">
        <div className="posts-list">
          {tags &&
            tags
              .filter(
                ({ name, hasOnlyDraft }) => search.showDraft || !hasOnlyDraft
              )
              .map(({ name: tagName }) => {
                if (!tagName) return null;
                return (
                  <div key={tagName} className="box">
                    <Link
                      to={`/tags/${tagName}${searchQP}`}
                      className="title has-text-link is-3"
                    >
                      #{tagName}
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}
