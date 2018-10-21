import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { TitleAndDescription } from "./TitleAndDescription";

export default class Header extends React.Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={data => <TitleAndDescription data={data} />}
      />
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
