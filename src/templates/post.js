// @flow

import React from "react";
import { Link, graphql } from "gatsby";
import Header from "components/Header";
import NeighbourLinks from "components/NeighbourLinks";
import type { IMarkdownRemark } from "types/gatsby.flow";

type IProps = {
  data: { markdownRemark: IMarkdownRemark },
  pageContext: {
    prev: IMarkdownRemark | null,
    next: IMarkdownRemark | null
  }
};

export default class Template extends React.Component<IProps> {
  render() {
    const {
      data: { markdownRemark },
      pageContext: { prev, next }
    } = this.props;
    const { frontmatter, html } = markdownRemark;
    const title = frontmatter && frontmatter.title;

    return (
      <div>
        <Header />
        <div className="container">
          <div className="content">
            {title && <h2>{title}</h2>}
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <NeighbourLinks prev={prev} next={next} />
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
