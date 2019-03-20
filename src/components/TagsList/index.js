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
    const search = parse(window.location.search);

    return (
      <div className="tile is-ancestor is-vertical">
        {tags &&
          tags
            .filter(
              ({ name, hasOnlyDraft }) => search.showDraft || !hasOnlyDraft
            )
            .map(({ name: tagName }) => {
              if (!tagName) return null;
              return (
                <div
                  key={tagName}
                  className="tile notification is-light  is-child box"
                >
                  <Link
                    to={`/tags/${tagName}${window.location.search}`}
                    className="subtitle has-text-link"
                  >
                    {tagName}
                  </Link>
                </div>
              );
            })}
      </div>
    );
  }
}
