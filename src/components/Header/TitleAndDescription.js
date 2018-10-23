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
        <div className="title is-1">{title}</div>
        <div className="subtitle heading has-text-link is-6">{description}</div>
      </div>
    );
  }
}
