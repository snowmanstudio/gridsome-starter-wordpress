module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'A WordPress starter for Gridsome',

  templates: {
    WordPressCategory: '/category/:slug', // adds a route for the "category" post type (Optional)
    WordPressPost: '/blog/:slug', // adds a route for the "post" post type (Optional)
    BlogPost:'/:title',
  },
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://freehub.online', // required
        apiBase: 'wp-json',
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    },
    { 
      use: 'gridsome-source-rest',
      options: {
        endpoint: 'https://freehub.online/wp-json/wp/v2/posts',
        typeName: 'BlogPost',
      }
    }
  ]
}  
