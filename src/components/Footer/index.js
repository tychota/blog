// @flow
import React from "react";

export default class Footer extends React.Component<{}> {
  render() {
    return (
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Blog</strong> by{" "}
            <a href="https://blog.tycoach.me">Tycho Tatitscheff</a>. The source
            code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            The website content is licensed{" "}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </div>
      </footer>
    );
  }
}
