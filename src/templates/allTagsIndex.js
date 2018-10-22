// @flow

// #region global import
import React from "react";
// #endregion global import

// #region components
import Header from "components/Header";
import TagsList from "components/TagsList";
// #endregion components

type IProps = {
  pageContext: { tags: Array<string | null> }
};

export default class AllTagsIndexTemplate extends React.Component<IProps> {
  render() {
    const {
      pageContext: { tags }
    } = this.props;

    return (
      <div>
        <Header />
        <div className="container">
          <h2 className="subtitle">Tags</h2>
          <TagsList tags={tags} />
        </div>
      </div>
    );
  }
}
