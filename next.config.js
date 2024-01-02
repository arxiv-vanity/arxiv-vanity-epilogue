module.exports = {
  async redirects() {
    return [
      {
        source: '/papers/:id*',
        destination: 'https://ar5iv.labs.arxiv.org/html/:id*',
        permanent: false,
      },
    ];
  },
};
