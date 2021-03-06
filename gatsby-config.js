module.exports = {
  siteMetadata: {
    title: `SUPERSTARS`,
    email: `info@superstars.jp`,
    description: `Hello! we are SUPERSTARS`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`
  ]
}
