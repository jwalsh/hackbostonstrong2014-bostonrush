$(document).ready(function() {

    window.model = { runners: {}};

    $.get(
        '/data/marathon_2013.json',

        function(data, code) {
            model.runners.all = data;
            model.runners.top = _.select(
                data,
                function(runner) {
                    return runner.name === 'Desisa, Lelisa';
                })[0];
            model.runners.top.firstName = model.runners.top.name.split(',')[1];
            model.runners.top.lastName = model.runners.top.name.split(',')[0];
            $.get('templates/runner.mst', function(template) {
                $('#topRunner').html(Mustache.render(template, model.runners.top));
            });
            console.log(model);
        });
});
