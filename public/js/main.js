$(document).ready(function() {

    window.model = {};

    $.get(
        '/data/marathon_2013.json',

        function(data, code) {
            model.top = _.select(
                data,
                function(runner) {
                    return parseInt(runner.overallPlace, 10) < 2;
                });
            var $markup = $('<tt>');
            $markup.html(JSON.stringify(model.top));
            $('.lead').html($markup);
            console.log(model.top);
        });

});
