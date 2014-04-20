/**
 * GET /friends
 * Friends page.
 */

var graph = require('fbgraph');

exports.friends = function(req, res) {
  res.render('Friends', {
    title: 'BostonRush'
  });
};
