/// <reference path="../typings/index.d.ts" />
import $=require("jquery");

let i = 1;

function foo( num : number ):void{
    console.log(i);
    $("body").append("<p>hello</p>");
}

export { foo as start };