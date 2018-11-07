// @flow

import React from "react";
import { graphql } from "gatsby";
import Header from "components/Header";
import SEO from "components/SEO";
import Footer from "components/Footer";
import NeighbourLinks from "components/NeighbourLinks";
import type { IMarkdownRemark } from "types/gatsby.flow";

import rehypeReact from "rehype-react";

const renderAst = new rehypeReact({
  createElement: React.createElement
}).Compiler;

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
    const { frontmatter, htmlAst } = markdownRemark;
    const title = frontmatter && frontmatter.title;

    return (
      <>
        <SEO postImage={null} postData={markdownRemark} isBlogPost />
        <div>
          <section className="hero is-light is-bold">
            <Header />
            <hr className="hr is-marginless" />
            <section className="section">
              <div className="hero-body">
                <div className="container">
                  <div className="title has-text-weight-semibold is-1 has-text-centered">
                    {title}
                  </div>
                </div>
              </div>
            </section>
          </section>
          <div className="container is-fluid">
            <div className="content">
              <div className="grid">{renderAst(htmlAst)}</div>
            </div>
            <NeighbourLinks prev={prev} next={next} />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      htmlAst
      frontmatter {
        title
        datePublished: date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
      }
    }
  }
`;
