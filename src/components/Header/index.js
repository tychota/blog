// @flow
import React from "react";
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
              <img src={require("images/logo/one-percent-512.png")} alt="" />
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="/">
              <StaticQuery
                query={query}
                render={data => <TitleAndDescription data={data} />}
              />
            </Link>
          </div>
        </div>
        <div class="navbar-end">
          <Link to="/tags" className="navbar-item has-text-link">
            Post by Tags
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
