module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'A WordPress starter for Gridsome',
  plugins: [
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
