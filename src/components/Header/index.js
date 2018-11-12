// @flow
import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql, Link } from "gatsby";
import { TitleAndDescription } from "components/Header/TitleAndDescription";

export default class Header extends React.Component<{}> {
  render() {
    return (
      <nav
        className="navbar hero-head"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item is-hidden-mobile">
            <Link to="/">
              <StaticQuery
                query={logoQuery}
                render={data => {
                  if (!data.file) return null;
                  return <Img fixed={data.file.childImageSharp.fixed} alt="" />;
                }}
              />
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="/">
              <TitleAndDescription />
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/tags" className="has-text-link">
              Post by Tags
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

const logoQuery = graphql`
  {
    file(relativePath: { eq: "logo/one-percent-512.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 64, height: 64) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
