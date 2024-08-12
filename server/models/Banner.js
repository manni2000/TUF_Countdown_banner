const db = require('../config/db');

const Banner = {
  getBanner: (callback) => {
    const query = 'SELECT * FROM banner WHERE id = 1';
    db.query(query, callback);
  },

  updateBanner: ({ description, timer, link, isVisible }, callback) => {
    const query = 'UPDATE banner SET description = ?, timer = ?, link = ?, isVisible = ? WHERE id = 1';
    db.query(query, [description, timer, link, isVisible], callback);
  },
};

module.exports = Banner;
