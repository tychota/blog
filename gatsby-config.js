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
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    }
  ]
};
