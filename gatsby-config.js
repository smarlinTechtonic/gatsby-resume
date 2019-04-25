module.exports = {
    siteMetadata: {
        title: 'Wonderful Blog',
        author: 'Aggie Agatha'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
          },
    ]
}