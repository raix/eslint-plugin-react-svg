/**
 * @fileoverview Unused ids in the SVG is not allowed
 * @author Morten Henriksen
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-unused-ids-in-svg"),

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
ruleTester.run("no-unused-ids-in-svg", rule, {

    valid: [
        `const Foo = () => (
            <svg>
                <g>
                    <line />
                </g>
            </svg>
        );`,
        `const Foo = () => (
            <svg>
                <g width="100%" id="foo_id" height="100%">
                    <line />
                </g>
                <use href="#foo_id" x="10" fill="blue"/>
            </svg>
        );`,
        `const Foo = ({children}) => (<svg>{children}</svg>);
        const Bar = () => (
            <Foo>
                <g width="100%" id="foo_id" height="100%">
                    <line />
                </g>
                <use xlinkHref="#foo_id" x="10" fill="blue"/>
            </Foo>
        );`
    ],

    invalid: [
        {
            code:
            `const Foo = () => (
                <svg>
                    <g id="Rectangle-57">
                        <line />
                    </g>
                </svg>
            );`,
            errors: [{
                message: "Unused id not allowed",
                type: "JSXAttribute"
            }],
            output:
            `const Foo = () => (
                <svg>
                    <g>
                        <line />
                    </g>
                </svg>
            );`
        },
        {
            code:
            `const Foo = () => (
                <svg>
                    <g width="100%" id="Rectangle-57" height="100%">
                        <line />
                    </g>
                </svg>
            );`,
            errors: [{
                message: "Unused id not allowed",
                type: "JSXAttribute"
            }],
            output:
            `const Foo = () => (
                <svg>
                    <g width="100%" height="100%">
                        <line />
                    </g>
                </svg>
            );`
        },
        {
            code:
            `const Foo = ({children}) => (<svg>{children}</svg>);
            const Bar = () => (
                <Foo>
                    <g width="100%" id="Rectangle-57" height="100%">
                        <line />
                    </g>
                </Foo>
            );`,
            errors: [{
                message: "Unused id not allowed",
                type: "JSXAttribute"
            }],
            output:
            `const Foo = ({children}) => (<svg>{children}</svg>);
            const Bar = () => (
                <Foo>
                    <g width="100%" height="100%">
                        <line />
                    </g>
                </Foo>
            );`
        }
    ]
});
