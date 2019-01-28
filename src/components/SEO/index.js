// @flow

// This is mainly stolen from https://github.com/jlengstorf/lengstorf.com/blob/master/src/components/SEO.js
// and https://github.com/gatsbyjs/gatsby/blob/master/www/src/components/layout.js
// both under MIT

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import type { IFrontmatter2 } from "types/gatsby.flow";
import MyImg from "../../images/me/tycho.jpg";

const URL = "https://blog.tycoach.me";

const getSchemaOrgJSONLD = ({
  isBlogPost,
  url,
  title,
  alternateName,
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
      alternateName
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
          alternateName,
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
  isBlogPost?: boolean,
  postData?: {
    frontmatter: IFrontmatter2 | null
  },
  postImage: ?string
};

class SEO extends React.Component<IProps> {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                title
                description
                myDescription
                alternateName
                siteUrl
                #image
              }
            }
          }
        `}
        render={({ site: { siteMetadata: seo } }) => {
          const postMeta =
            (this.props.postData && this.props.postData.frontmatter) || {};

          const title = postMeta.title || seo.alternateName;
          const description = postMeta.excerpt || seo.description;
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
            datePublished,
            alternateName: seo.alternateName
          });

          return (
            <Helmet title={title}>
              <title itemProp="name" lang="en">
                {title}
              </title>

              {/* <base target="_blank" href={URL} /> */}

              <html lang="en" amp />
              <noscript>This blog needs javascript to work :/</noscript>
              {/* General tags */}
              {isBlogPost ? (
                <meta name="description" content={description} />
              ) : (
                <meta name="description" content={seo.myDescription} />
              )}
              <meta name="image" content={image} />

              {/* Schema.org tags */}
              <script type="application/ld+json">
                {JSON.stringify(schemaOrgJSONLD)}
              </script>

              {/* OpenGraph tags */}
              <meta property="og:url" content={url} />
              {isBlogPost ? (
                <meta property="og:type" content="article" />
              ) : null}
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
        }}
      />
    );
  }
}

export default SEO;
