/// <reference path="../typings/index.d.ts" />
import $=require("jquery");

let i = 1;

function foo( num : number ):number{
    console.log(i);
    $("body").append("<p>hello</p>");
    return 2;
}

export { foo as start };
