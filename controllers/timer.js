/**
 * GET /timer
 * Timer page.
 */

var graph = require('fbgraph');

exports.timer = function(req, res) {
  res.render('Timer', {
    title: 'BostonRush'
  });
};
