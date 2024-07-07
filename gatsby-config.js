/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Surender Soundiramourty | Portfolio`,
    siteUrl: `https://surenderpsm.github.io`
  },
  plugins: ["gatsby-plugin-postcss", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon.svg"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};