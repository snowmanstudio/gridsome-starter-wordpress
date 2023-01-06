module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'A WordPress starter for Gridsome',

  templates: {
    WordPressCategory: '/category/:slug', // adds a route for the "category" post type (Optional)
    WordPressPost: '/:year/:month/:day/:slug', // adds a route for the "post" post type (Optional)
    WordPressPostTag: '/tag/:slug', // adds a route for the "post_tag" post type (Optional)
    
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
          endpoint: 'https://gist.githubusercontent.com/mklueh/ee707de96586f4b0776165facf9a5f00/raw/13291cecd49d8dcd072f9d252b25bf080e21f211/demo-posts-api.json'
          ,//'http://localhost:3000/posts',
          typeName: 'BlogPost'
      }
  },
  {
      use: 'gridsome-source-rest',
      options: {
          endpoint: 'https://gist.githubusercontent.com/mklueh/6a988fd01b1821acfd9277d32a70db16/raw/12d46be1d7cd51cd65862c1bf0959f078f76fc2f/demo-settings-api.json',
          typeName: 'settings',
          isStatic: true
      }
  }
  ]
}  
