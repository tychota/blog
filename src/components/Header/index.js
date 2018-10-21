import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { TitleAndDescription } from "./TitleAndDescription";

export default class Header extends React.Component {
  render() {
    return (
      <nav className="level">
        <div className="container">
          <div className="level-item has-text-centered">
            <StaticQuery
              query={query}
              render={data => <TitleAndDescription data={data} />}
            />
          </div>
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
