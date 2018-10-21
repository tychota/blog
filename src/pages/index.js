// @flow

import React from "react";
import Header from "../components/Header";
import "bulma/css/bulma.css";
import { graphql } from "gatsby";
import type { IMarkdownRemarkConnection } from "../../types/gatsby.flow";

export default class Layout extends React.Component<{
  data: { allMarkdownRemark: IMarkdownRemarkConnection }
}> {
  render() {
    const {
      data: {
        allMarkdownRemark: { edges: posts }
      }
    } = this.props;

    return (
      <div>
        <nav className="level">
          <Header />
        </nav>
        {posts ? (
          <div className="container">
            {posts.map(post => {
              if (!post) return null;
              const { node } = post;
              if (!node) return null;
              const { frontmatter } = node;
              if (!frontmatter) return null;

              return <div key={frontmatter.path}>{frontmatter.title}</div>;
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;
