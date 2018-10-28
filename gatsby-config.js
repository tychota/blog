const path = require("path");

module.exports = {
  siteMetadata: {
    title: "One percent",
    description: "Trying to be better every day.",
    siteUrl: "https://blog.tycoach.me"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        types: path.join(__dirname, "types"),
        images: path.join(__dirname, "src/images"),
        pages: path.join(__dirname, "src/pages"),
        components: path.join(__dirname, "src/components")
      }
    },
    "gatsby-plugin-flow",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              showCaptions: true
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem"
            }
          },
          "gatsby-remark-prismjs"
        ]
      }
    },
    "gatsby-plugin-catch-links",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    },
    "gatsby-plugin-feed",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "One Percent Better",
        short_name: "1%",
        description: "This is how I try to be one perceent better everyday.",
        theme_color: "#B6001F",
        background_color: "#f5f5f5",
        display: "minimal-ui",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icon: "src/images/logo/one-percent-512.png"
      }
    },
    "gatsby-plugin-offline"
  ]
};
