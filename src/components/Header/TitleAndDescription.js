// @flow

import React from "react";
import type { ISite } from "types/gatsby.flow";

type IProps = {
  data: {
    site: ISite
  }
};

export class TitleAndDescription extends React.Component<IProps> {
  render() {
    const {
      data: {
        site: { siteMetadata }
      }
    } = this.props;
    if (!siteMetadata) return null;

    const { title, description } = siteMetadata;

    return (
      <div>
        <h2 className="title">{title}</h2>
        <div className="subtitle heading has-text-link">{description}</div>
      </div>
    );
  }
}
