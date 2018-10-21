// @flow

import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import type { IMarkdownRemark } from "../../types/gatsby.flow";

type IProps = {
  data: { markdownRemark: IMarkdownRemark }
};

export default class Template extends React.Component<IProps> {
  render() {
    const {
      data: {
        markdownRemark: {
          frontmatter: { title },
          html
        }
      }
    } = this.props;
    return (
      <div>
        <Header />
        <div className="container">
          <div className="content">
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
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
