module.exports = {
    client: {
      name: 'Portfolio client',
      service: {
        name: 'graphql-api',
        url: 'http://localhost:8000/__graphql',

      },
      excludes: ['src/components/other/**/*']
    },
  };