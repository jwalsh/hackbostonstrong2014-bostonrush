$(document).ready(function() {

    window.model = {};

    $.get(
        '/data/marathon_2013.json',

        function(data, code) {
            model.top = _.select(
                data,
                function(runner) {
                    return parseInt(runner.overallPlace, 10) < 2;
                })[0];
            $.get('templates/runner.mst', function(template) {
                // $('.lead').html(Mustache.render(template, model.top));
            });

            console.log(model.top);
        });

});
