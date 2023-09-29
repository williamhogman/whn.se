module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://sobel.io/staff/whn",
        permanent: false,
      },
      {
        source: '/readme',
        destination: 'https://github.com/williamhogman/working-with-will/blob/master/README.org',
        permanent: false,
      },
    ]
  },
}
