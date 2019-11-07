/**
 * @fileoverview Unused ids in the SVG is not allowed
 * @author Morten Henriksen
 */
"use strict";
const isSvgTag = require("../helpers/isSvgTags");
const getJSXIdentifier = require("../helpers/getJSXIdentifier");
const tagList = require("../helpers/tagList");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const validId =  /([a-zA-Z]([-a-zA-Z0-9_.]+)?)/;

const extractReference = /#(\S+)/;
const extractUrlReference = /url\(#(\S+)\)/;

module.exports = {
    meta: {
        docs: {
            description: "Unused ids in the SVG is not allowed",
            category: "Fill me in",
            recommended: false
        },
        fixable: "code",
        schema: [
        ]
    },

    create: function(context) {
        const idMap = new Map();
        const refIdMap = new Map();
        const sourceCode = context.getSourceCode();

        return {
            onCodePathStart: function (codePath, node) {
                // at the start of analyzing a code path
            },
            onCodePathEnd: function(codePath, node) {
                // at the end of analyzing a code path
                idMap.forEach((node, id) => {
                    if (refIdMap.has(id)) {
                        return;
                    }
                    context.report({
                        node,
                        message: "Unused id not allowed",
                        fix(fixer) {
                            let prevToken = sourceCode.getTokenBefore(node)
                            while (prevToken.value === " ") {
                                prevToken = sourceCode.getTokenBefore(node)
                            }
                            let nextToken = sourceCode.getTokenAfter(node)
                            if (nextToken.value !== " ") {
                               nextToken = sourceCode.getTokenBefore(nextToken)
                            }

                            return fixer.removeRange([prevToken.range[1], nextToken.range[1]])
                        }
                    });
                    idMap.delete(id);
                });
            },
            JSXAttribute(node) {
                const id = (node.value || {}).value;
                const name = (getJSXIdentifier(node) || {}).name;
                const parentName = (getJSXIdentifier(node.parent) || {}).name
                if (id === undefined) {
                    return;
                }
                if (isSvgTag(parentName) === false) {
                    return;
                }
                if ((node.value || {}).type !== "Literal") {
                    return;
                 }
                if (name !== "id" && tagList.referenceAttributes.indexOf(name) < 0) {
                    return;
                }
                if (name === "id") {
                    idMap.set(id, node);
                    if (validId.test(id) === false) {
                        context.report({
                            node,
                            message: `Id "${id}" is not following the specification`
                        });
                    }
                }
                if (tagList.referenceAttributes.includes(name)) {
                    const [, urlReference] = id.match(extractUrlReference) || [];
                    const [, idReference] = id.match(extractReference) || [];

                    if (idReference && tagList.referenceByHref.includes(parentName)) {
                        refIdMap.set(idReference, node);
                        if (validId.test(idReference) === false) {
                            context.report({
                                node,
                                message: `Id "${idReference}" in reference is not following the specification`
                            });
                        }
                    }
                    else if (urlReference !== undefined) {
                        refIdMap.set(urlReference, node);
                        if (validId.test(urlReference) === false) {
                            context.report({
                                node,
                                message: `Id "${urlReference}" in reference is not following the specification`
                            });
                        }
                    }
                }
            }
        };
    }
};

