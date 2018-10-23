// @flow

import React from "react";
import { graphql } from "gatsby";
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

export default class PostTemplate extends React.Component<IProps> {
  render() {
    const {
      data: { markdownRemark },
      pageContext: { prev, next }
    } = this.props;
    const { frontmatter, html } = markdownRemark;
    const title = frontmatter && frontmatter.title;

    return (
      <div>
        <section className="hero is-light is-bold">
          <Header />
          <hr className="hr is-marginless" />
          <section className="section">
            <div className="hero-body">
              <div className="container">
                <div className="title has-text-weight-semibold is-1">
                  {title}
                </div>
              </div>
            </div>
          </section>
        </section>
        <div className="main container is-fluid">
          <div className="content">
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
