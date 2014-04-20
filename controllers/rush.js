/**
 * GET /rush
 * Home page.
 */

var graph = require('fbgraph');

exports.rush = function(req, res) {
  res.render('Rush', {
    title: 'BostonRush'
  });
};
