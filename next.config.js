module.exports = {
  async redirects() {
    return [
      {
        source: '/readme',
        destination: 'https://github.com/williamhogman/working-with-will/blob/master/README.org',
        permanent: false,
      },
    ]
  },
}
