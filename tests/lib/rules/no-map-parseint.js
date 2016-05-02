/**
 * @fileoverview Don&#39;t use .map(parseInt) and complain about it afterwards
 * @author ThomasC__
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-map-parseint"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-map-parseint", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "[&#39;10&#39;, &#39;10&#39;, &#39;10&#39;, &#39;10&#39;].map(parseInt)",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
