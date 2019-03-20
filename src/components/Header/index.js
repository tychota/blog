// @flow
import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql, Link } from "gatsby";
import { TitleAndDescription } from "components/Header/TitleAndDescription";
import { parse, stringify } from "query-string";

export default class Header extends React.Component<{}> {
  render() {
    const search = parse(window.location.search);
    return (
      <nav
        className="navbar hero-head"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item is-hidden-mobile">
            <Link to={`/${window.location.search}`}>
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
            <Link to={`/${window.location.search}`}>
              <TitleAndDescription />
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link
              to={`/tags${window.location.search}`}
              className="has-text-link"
            >
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
