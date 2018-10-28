const path = require("path");

const createTagPages = (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve("src/templates/allTagsIndex.js");
  const singleTagIndexTemplate = path.resolve(
    "src/templates/singleTagIndex.js"
  );

  const postsByTag = {};

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = [];
        }

        postsByTag[tag].push(node);
      });
    }
  });

  const tags = Object.keys(postsByTag);

  createPage({
    path: "/tags",
    component: allTagsIndexTemplate,
    context: { tags: tags.sort() }
  });

  tags.forEach(tagName => {
    const posts = postsByTag[tagName];

    createPage({
      path: `/tags/${tagName}`,
      component: singleTagIndexTemplate,
      context: {
        posts,
        tagName
      }
    });
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve("src/templates/post.js");

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            filter: { frontmatter: { draft: { ne: true } } }
          ) {
            edges {
              node {
                frontmatter {
                  path
                  title
                  tags
                }
              }
            }
          }
        }
      `)
    );
  }).then(result => {
    const posts = result.data.allMarkdownRemark.edges;

    createTagPages(createPage, posts);

    posts.forEach(({ node }, index) => {
      const path = node.frontmatter.path;

      createPage({
        path,
        component: postTemplate,
        context: {
          pathSlug: path,
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node
        }
      });
    });
  });
};

// Add custom url pathname for blog posts.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "File") {
    const parsedFilePath = path.parse(node.absolutePath);
    const slug = `/${parsedFilePath.dir.split("---")[1]}/`;
    createNodeField({ node, name: "slug", value: slug });
  } else if (
    node.internal.type === "MarkdownRemark" &&
    typeof node.slug === "undefined"
  ) {
    const fileNode = getNode(node.parent);
    createNodeField({
      node,
      name: "slug",
      value: fileNode.fields.slug
    });
  }
};
