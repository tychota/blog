// @flow

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import type { ISite } from "types/gatsby.flow";

type IData = {
  site: ISite
};

export class TitleAndDescription extends React.Component<{}> {
  render() {
    return (
      <StaticQuery
        query={metadataQuery}
        render={({ site: { siteMetadata } }: IData) => {
          if (!siteMetadata) return null;

          const { title, description } = siteMetadata;
          return (
            <div>
              <div className="title is-1">{title}</div>
              <div className="subtitle heading has-text-link is-6">
                {description}
              </div>
            </div>
          );
        }}
      />
    );
  }
}

const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
