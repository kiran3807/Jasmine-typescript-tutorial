/// <reference path="../typings/index.d.ts" />
declare var require:any;
require.config({
    baseUrl: 'lib',

    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min'
    }

});

import $=require("jquery");

let i = 1;

function foo( num : number ):void{
    console.log(i);
}
