// @flow

// This is mainly stolen from https://github.com/jlengstorf/lengstorf.com/blob/master/src/components/SEO.js
// and https://github.com/gatsbyjs/gatsby/blob/master/www/src/components/layout.js
// both under MIT

import path from "path";
import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import type { IFrontmatter2 } from "types/gatsby.flow";
import MyImg from "../../images/me/tycho.jpg";

const URL = "https://blog.tycoach.me";
const ALTERNATE_NAME = "Tycho Tatitscheff · One percent better every day.";

const getSchemaOrgJSONLD = ({
  isBlogPost,
  url,
  title,
  image,
  description,
  datePublished
}) => {
  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url,
      name: title,
      alternateName: ALTERNATE_NAME
    }
  ];

  return isBlogPost
    ? [
        ...schemaOrgJSONLD,
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": url,
                name: title,
                image
              }
            }
          ]
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url,
          name: title,
          alternateName: ALTERNATE_NAME,
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image
          },
          description,
          author: {
            "@type": "Person",
            name: "Tycho Tatitscheff"
          },
          publisher: {
            "@type": "Organization",
            url: URL,
            logo: "https://blog.tycoach.me/icons/icon-512x512.png",
            name: "Tycho Tatitscheff"
          },
          mainEntityOfPage: {
            "@type": "WebSite",
            "@id": URL
          },
          datePublished
        }
      ]
    : schemaOrgJSONLD;
};

type IProps = {
  isBlogPost: boolean,
  postData: {
    frontmatter: IFrontmatter2 | null
  },
  postImage: ?string
};

class SEO extends React.Component<IProps> {
  render() {
    const postMeta = this.props.postData.frontmatter || {};

    const title = postMeta.title || ALTERNATE_NAME;
    const description = postMeta.excerpt || "";
    const image = this.props.postImage
      ? `${URL}/${this.props.postImage}`
      : MyImg;
    const url = postMeta.path ? `${URL}${postMeta.path}` : URL;
    const datePublished = this.props.isBlogPost ? postMeta.date : false;
    const isBlogPost = this.props.isBlogPost;

    const schemaOrgJSONLD = getSchemaOrgJSONLD({
      isBlogPost,
      url,
      title,
      image,
      description,
      datePublished
    });

    return (
      <Helmet title={title}>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="fb:app_id" content="" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@tychota" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        <meta name="docsearch:version" content="2.0" />
        <link rel="canonical" href={url} />
        <html lang="en" />
      </Helmet>
    );
  }
}

export default SEO;
