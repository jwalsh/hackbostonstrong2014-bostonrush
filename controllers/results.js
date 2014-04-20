/**
 * GET /results
 * Results
 */

var graph = require('fbgraph');

exports.results = function(req, res) {
  res.render('Results', {
    title: 'BostonRush'
  });
};
