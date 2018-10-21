import React from "react";

export class TitleAndDescription extends React.Component {
  render() {
    const {
      data: {
        site: {
          siteMetadata: { title, description }
        }
      }
    } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <div>{description}</div>
      </div>
    );
  }
}
