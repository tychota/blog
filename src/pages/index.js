// @flow

import React from "react";
import Header from "../components/Header";
import PostsList from "../components/PostsList";
import "bulma/css/bulma.css";
import { graphql } from "gatsby";
import type { IMarkdownRemarkConnection } from "../../types/gatsby.flow";

type IProps = {
  data: { allMarkdownRemark: IMarkdownRemarkConnection }
};

export default class Layout extends React.Component<IProps> {
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
        <div className="container">
          <PostsList posts={posts} />
        </div>
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
