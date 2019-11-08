/**
 * @fileoverview The title element is not used when rendering the svg
 * @author Morten Henriksen
 */
"use strict";
const isSvgTag = require("../helpers/isSvgTags");
const getJSXIdentifier = require("../helpers/getJSXIdentifier");
const tagList = require("../helpers/tagList.js");
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "The title element is not used when rendering the svg",
            category: "react svg",
            recommended: true
        },
        fixable: "code",
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        return {
            JSXElement(node) {
                const name = (getJSXIdentifier(node) || {}).name;
                if (tagList.shouldOmitTags.indexOf(name) < 0) {
                    return;
                }
                if (isSvgTag(name) === false) {
                    return;
                }
                context.report({
                    node,
                    message: `Unused tag "<${name}>" not allowed`,
                    fix: function (fixer) { return fixer.remove(node); },
                });
            },
        };
    }
};
