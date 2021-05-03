const Promise = require('bluebird')
const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-javascript') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const blogList = path.resolve('./src/pages/blog.js')

    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        const tags = new Set()

        if (!posts) return

        posts.forEach(({ node }) => {
          if (node.tags) node.tags.forEach((tag) => tags.add(tag))
        })

        tags.forEach((tag) => {
          createPage({
            path: `/tags/${tag}/`,
            component: blogList,
            context: {
              tag: tag,
            },
          })
        })

        posts.forEach(({ node }) => {
          createPage({
            path: `/blog/${node.slug}/`,
            component: blogPost,
            context: {
              slug: node.slug,
            },
          })
        })


      })
    )

  })
}
