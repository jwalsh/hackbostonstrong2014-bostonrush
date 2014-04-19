/**
 * GET /rush
 * Home page.
 */

exports.rush = function(req, res) {
  res.render('Rush', {
    title: 'BostonRush'
  });
};
