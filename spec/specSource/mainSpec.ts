/// <reference path="../../typings/index.d.ts" />

import { start } from "../../modules/app"
describe("Hello test", function() {
    it("first spec", function() {
      
        expect( start(3) ).toBe(2);
    });
});


