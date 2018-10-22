// @flow

import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";

import React from "react";
import Header from "components/Header";
import PostsList from "components/PostsList";
import { graphql } from "gatsby";
import type {
  IMarkdownRemarkConnection,
  IMarkdownRemarkEdge
} from "types/gatsby.flow";

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
        <Header />
        <div className="container">
          <h2 className="subtitle">Recent posts:</h2>
          {posts && (
            <PostsList
              posts={posts
                .filter((post: IMarkdownRemarkEdge | null) => post !== null)
                .map(post => post && post.node)}
            />
          )}
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
