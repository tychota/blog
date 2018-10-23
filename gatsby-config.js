const path = require("path");

module.exports = {
  siteMetadata: {
    title: "One percent",
    description: "Be one percent better everyday."
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        types: path.join(__dirname, "types"),
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
              maxWidth: 590
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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    }
  ]
};
