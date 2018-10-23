// @flow
import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { TitleAndDescription } from "components/Header/TitleAndDescription";

export default class Header extends React.Component<{}> {
  render() {
    return (
      <nav
        className="level hero-head"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <StaticQuery
                query={query}
                render={data => <TitleAndDescription data={data} />}
              />
            </Link>
          </div>
        </div>
        <div className="navbar-menu">
          <Link to="/tags" className="navbar-item has-text-link">
            Tags
          </Link>
        </div>
      </nav>
    );
  }
}

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
