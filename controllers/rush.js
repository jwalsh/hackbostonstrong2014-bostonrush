/**
 * GET /rush
 * Home page.
 */

exports.index = function(req, res) {
  res.render('Rush', {
    title: 'BostonRush'
  });
};
