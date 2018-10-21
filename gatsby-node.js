const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve("src/templates/post.js");

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      `)
    );
  }).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const path = node.frontmatter.path;

      createPage({
        path,
        component: postTemplate
      });
    });
  });
};
