module.exports = {
  siteMetadata: {
    title: "One percent",
    description: "Be one percent better everyday."
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
};