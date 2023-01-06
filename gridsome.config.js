module.exports = {
  siteName: 'Gridsome',
  siteUrl: 'https://gridsome-starter-wordpress.pages.dev',
  siteDescription: 'A WordPress starter for Gridsome',

  templates: {
    WordPressCategory: '/category/:slug', // adds a route for the "category" post type (Optional)
    WordPressPost: '/:slug', // adds a route for the "post" post type (Optional)
    BlogPost:'/:slug',
  },
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://directorycat.info', // required
        apiBase: 'wp-json',
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    },
    {
      use: 'gridsome-source-rest',
      options: {
        endpoint: 'https://directorycat.info/wp-json/wp/v2/posts',
        typeName: 'BlogPost',
      }
    }
  ]
}  
