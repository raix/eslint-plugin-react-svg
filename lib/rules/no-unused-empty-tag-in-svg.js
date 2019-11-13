/**
 * @fileoverview Remove empty/unused svg tags
 * @author Morten Henriksen
 */
"use strict";
const tagList = require("../helpers/tagList.js");
const getJSXIdentifier = require("../helpers/getJSXIdentifier");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

function getAttributes(node) {
    if (node.openingElement !== undefined) {
        return node.openingElement.attributes || [];
    }

    return [];
}

module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "Remove empty/unused svg tags",
            category: "react svg",
            recommended: true
        },
        fixable: "code",
    },

    create: function(context) {
        return {
            JSXElement(node) {
                const name = (getJSXIdentifier(node) || {}).name;
                if ((node.children || []).length > 0) {
                    return;
                }
                if (getAttributes(node).length > 0) {
                    return;
                }
                if (tagList.uselessIfEmptyTags.indexOf(name) < 0) {
                    return;
                }
                const canSafelyBeFixed = ["ArrowFunctionExpression", "ReturnStatement"].indexOf(node.parent.type) < 0;

                context.report({
                    node,
                    message: `No empty <${name}> tags allowed`,
                    fix: canSafelyBeFixed && function (fixer) { return fixer.remove(node); },
                });
            },
        };
    }
};
