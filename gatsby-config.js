/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `scottgruber`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", `gatsby-plugin-image`,
  `gatsby-plugin-sharp`, 'gatsby-plugin-mdx', "gatsby-transformer-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: 'projects',
      path: `${__dirname}/projects`
    }
  },
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [

        {
          name: `Cardo`,
          file: `https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&display=swap`,
        },
        {
          name: `Montserrat`,
          file: `https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap`,
        },
      ],
    },
  },
]
};