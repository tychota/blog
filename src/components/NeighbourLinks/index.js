// @flow

import React from "react";
import { Link, graphql } from "gatsby";
import type { IMarkdownRemark } from "types/gatsby.flow";

type IProps = {
  prev: IMarkdownRemark | null,
  next: IMarkdownRemark | null
};

export default class NeighbourLinks extends React.Component<IProps> {
  render() {
    const { prev, next } = this.props;
    return (
      <div className="level">
        <div className="level-item has-text-centered">
          {prev && prev.frontmatter ? (
            <Link to={prev.frontmatter.path} className="button is-small">
              <span className="icon is-small">
                <i className="fas fa-arrow-left" />
              </span>
              <span>{prev.frontmatter.title}</span>
            </Link>
          ) : null}
        </div>
        <div className="level-item has-text-centered">
          {next && next.frontmatter ? (
            <Link to={next.frontmatter.path} className="button is-small">
              <span>{next.frontmatter.title}</span>
              <span className="icon is-small">
                <i className="fas fa-arrow-right" />
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    );
  }
}
