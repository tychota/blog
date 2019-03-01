// @flow
import React from "react";

export default class Footer extends React.Component<{}> {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Blog</strong> by{" "}
            <a href="https://blog.tycoach.me">Tycho Tatitscheff</a>.
            <br />
            <br />
            The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            <br />
            The website content is licensed{" "}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC&nbsp;BY&nbsp;NC&nbsp;SA&nbsp;4.0
            </a>
            .
            <br />
            Contribution{" "}
            <a href="https://github.com/tychota/blog/blob/master/CONTRIBUTING.md">
              welcomed
            </a>
            😍
          </p>
        </div>
      </footer>
    );
  }
}
