// @flow
import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import PostsList from "components/PostsList";
import SEO from "components/SEO";

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
      <div className="layout">
        <SEO postImage={null} />
        <div className="hero is-light is-bold navbar">
          <Header />
          <hr className="hr is-marginless" />
          <section className="section">
            <div className="hero-body">
              <div className="container">
                <h1 className="subtitle is-2">
                  Here are all the{" "}
                  <span className="has-text-weight-semibold is-capitalized">
                    Recent Posts
                  </span>
                </h1>
              </div>
            </div>
          </section>
        </div>
        <div className="main container is-fluid">
          {posts && (
            <PostsList
              posts={posts
                .filter((post: IMarkdownRemarkEdge | null) => post !== null)
                .map(post => post && post.node)}
            />
          )}
        </div>
        <Footer />
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
            draft
            title
            path
            date
            tags
          }
        }
      }
    }
  }
`;
