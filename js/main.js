require.config({
    baseUrl: 'modules',
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min',
        'app' : 'app'
    }
});
require(['app'], function (app) {
    app.start();
});
