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
  },'gatsby-transformer-remark',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  'gatsby-plugin-image', {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/content/"
    },
    __key: "pages"
  },'gatsby-transformer-inline-svg',
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /images\/vector/,
      }
    }
  }]
};