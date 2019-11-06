/**
 * @fileoverview The title element is not used when rendering the svg
 * @author Morten Henriksen
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-metadata-in-svg"),

RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
        jsx: true,
        },
    }
});
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-metadata-in-svg", rule, {

    valid: [
        "const Foo = () => (<svg><line /></svg>);"
    ],

    invalid: [
        {
            code: "const Foo = () => (<svg><title>foo</title><line /></svg>);",
            errors: [{
                message: "Unused tag \"<title>\" not allowed",
                type: "JSXElement"
            }],
            output: "const Foo = () => (<svg><line /></svg>);"
        },
        {
            code: "const Foo = () => (<svg><desc>foo</desc><line /></svg>);",
            errors: [{
                message: "Unused tag \"<desc>\" not allowed",
                type: "JSXElement"
            }],
            output: "const Foo = () => (<svg><line /></svg>);"
        }
    ]
});
