// @flow
import React from "react";
import { Link } from "gatsby";

type IProps = {
  tags: Array<string | null> | null
};

export default class TagsList extends React.Component<IProps> {
  render() {
    const { tags } = this.props;

    return (
      <div className="tile is-ancestor is-vertical">
        {tags &&
          tags.map(tagName => {
            if (!tagName) return null;
            return (
              <div
                key={tagName}
                className="tile notification is-light  is-child box"
              >
                <Link
                  to={`/tags/${tagName}`}
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
