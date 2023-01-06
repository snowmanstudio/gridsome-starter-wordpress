module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'A WordPress starter for Gridsome',

  templates: {
    WordPressCategory: '/category/:slug', // adds a route for the "category" post type (Optional)
    WordPressPost: '/:slug', // adds a route for the "post" post type (Optional)
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://freehub.online', // required
        apiBase: 'wp-json',
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    }
  ]
}  
