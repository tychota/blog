const path = require("path");

module.exports = {
  siteMetadata: {
    title: "One percent",
    description: "Trying to be better every day.",
    siteUrl: "https://blog.tycoach.me"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: path.join(__dirname, "src/images")
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        types: path.join(__dirname, "types"),
        images: path.join(__dirname, "src/images"),
        pages: path.join(__dirname, "src/pages"),
        components: path.join(__dirname, "src/components")
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-102266385-2",
        anonymize: true,
        respectDNT: true
      }
    },
    "gatsby-plugin-flow",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-smartypants",
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
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-remove-trailing-slashes",
    "gatsby-plugin-feed",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./src/images/logo/one-percent-512.png",
        // This will be overridden by next plugin
        appName: "One Percent Better", // Inferred with your package.json
        appDescription: "This is how I try to be one percent better everyday.",
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "en-US",
        background: "#f5f5f5",
        theme_color: "#B6001F",
        display: "minimal-ui",
        orientation: "portrait",
        start_url: "/",
        version: "1.0",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: true,
          windows: true
        }
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "One Percent Better",
        short_name: "1%",
        description: "This is how I try to be one percent better everyday.",
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
