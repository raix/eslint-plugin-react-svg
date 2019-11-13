/**
 * @fileoverview Empty svg tags renders nothing and can be a relic from export
 * @author Morten Henriksen
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-unused-empty-tag-in-svg"),

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
ruleTester.run("no-unused-empty-tag-in-svg", rule, {

    valid: [
        "const Foo = () => (<svg><line /></svg>);",
        'const Foo = () => (<svg transform="translate(0 0)"></svg>);',
    ],

    invalid: [
      {
          code: "const Foo = () => (<><svg></svg></>);",
          errors: [{
              message: "No empty <svg> tags allowed",
              type: "JSXElement"
          }],
          output: "const Foo = () => (<></>);"
      },
      {
        code: "const Foo = () => (<svg><g></g></svg>);",
        errors: [{
            message: "No empty <g> tags allowed",
            type: "JSXElement"
        }],
        output: "const Foo = () => (<svg></svg>);" // xxx: should be empty?
      },
      {
        code: "const Foo = () => (<svg></svg>);",
        errors: [{
            message: "No empty <svg> tags allowed",
            type: "JSXElement"
        }],
        output: "const Foo = () => (<svg></svg>);" // xxx: Cannot be fixed safely
      },
      {
        code: "function Foo() { return (<svg></svg>); }",
        errors: [{
            message: "No empty <svg> tags allowed",
            type: "JSXElement"
        }],
        output: "function Foo() { return (<svg></svg>); }" // xxx: Cannot be fixed safely
      }
    ]
});
