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
        <h2 className="title">{title}</h2>
        <div className="heading">{description}</div>
      </div>
    );
  }
}
