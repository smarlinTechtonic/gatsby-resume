module.exports = {
    siteMetadata: {
        title: 'Wonderful Blog',
        author: 'Aggie Agatha'
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-transformer-remark'
    ]
}