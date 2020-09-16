module.exports = {
  siteMetadata: {
    title: `Cameron Vargas Portfolio`,
    description: `Personal portfolio and blog for Cameron Vargas. Developer. Writer. Traveller.`,
    author: `@camvrgs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-hello`,
        short_name: `hello`,
        start_url: `/`,
        background_color: `#3C9FE5`,
        theme_color: `#3C9FE5`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
