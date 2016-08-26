
require.config({
    urlArgs: 'cb=' + Math.random(),
    paths: {
    	baseUrl: '../'
        jquery: './js/lib/jquery',
        'jasmine': './js/lib/jasmine-2.4.1/jasmine',
        'jasmine-html': './js/lib/jasmine-2.4.1/jasmine-html',
        /*spec: 'lib/jasmine/spec/'*/
    },
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});


require(['jquery', 'jasmine-html'], function ($, jasmine) {

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    var specs = [];

    specs.push('./spec/tests/mainSpec.js');
    $(function () {
        require(specs, function (spec) {
            jasmineEnv.execute();
        });
    });

});

