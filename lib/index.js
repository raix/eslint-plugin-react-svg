/**
 * @fileoverview Rules for react svg
 * @author Morten Henriksen
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  // import all rules in lib/rules
  rules: requireIndex(__dirname + "/rules"),
  deprecatedRules: {},
  configs: {
    recommended: {
      plugins: [
        "react",
        "react-svg"
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        "react-svg/no-metadata-in-svg": "error",
        "react-svg/no-unused-ids-in-svg": "error",
        "react-svg/no-unused-empty-tag-in-svg": "error",
      }
    }
  }
};

