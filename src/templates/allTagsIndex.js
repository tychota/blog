// @flow

// #region global import
import React from "react";
// #endregion global import

// #region components
import Header from "components/Header";
import TagsList from "components/TagsList";
import Footer from "components/Footer";
import SEO from "components/SEO";
// #endregion components

type ITag = {
  name: string | null,
  hasOnlyDraft: boolean | null
};
type IProps = {
  pageContext: { tags: Array<ITag> }
};

export default class AllTagsIndexTemplate extends React.Component<IProps> {
  render() {
    const {
      pageContext: { tags }
    } = this.props;

    return (
      <div className="layout">
        <SEO postImage={null} />
        <section className="hero is-light is-bold">
          <Header />
          <hr className="hr is-marginless" />
          <section className="section">
            <div className="hero-body">
              <div className="container">
                <h1 className="subtitle is-2">
                  Here are all the{" "}
                  <span className="has-text-weight-semibold is-capitalized">
                    Tags.
                  </span>
                </h1>
              </div>
            </div>
          </section>
        </section>
        <div className="main container is-fluid">
          <TagsList tags={tags} />
        </div>
        <Footer />
      </div>
    );
  }
}
