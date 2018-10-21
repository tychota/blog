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
      <nav className="level">
        <div className="container">
          <p class="level-item has-text-centered">
            <div>
              <h2 className="title">{title}</h2>
              <div className="heading">{description}</div>
            </div>
          </p>
        </div>
      </nav>
    );
  }
}
