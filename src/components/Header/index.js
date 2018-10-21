import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { TitleAndDescription } from "./TitleAndDescription";

export default class Header extends React.Component {
  render() {
    return (
      <nav
        className="level has-background-grey-lighter"
        style={{ marginBottom: "50px" }}
      >
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
