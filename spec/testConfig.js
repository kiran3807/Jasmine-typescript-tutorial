require.config({
  // to set the default folder, This is set w.r. to the location of the testRunner.html file which loads the current js file
  baseUrl: './spec/specOut', 
  // paths: maps ids with paths (no extension)
  paths: {
      'jasmine': ['/js/lib/jasmine-2.4.1/jasmine'],
      'jasmine-html': ['/js/lib/jasmine-2.4.1/jasmine-html'],
      'jasmine-boot': ['/js/lib/jasmine-2.4.1/boot'],
      'jquery':'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min'
  },
  // shim: makes external libraries compatible with requirejs (AMD)
  shim: {
    'jasmine-html': {
      deps : ['jasmine']
    },
    'jasmine-boot': {
      deps : ['jasmine', 'jasmine-html']
    }
  }
});
require(['jasmine-boot'], function () {
  require(['mainSpec'], function(){
    //trigger Jasmine
    window.onload();
  })
});

