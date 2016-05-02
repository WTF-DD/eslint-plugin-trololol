/**
 * @fileoverview Don&#39;t use .map(parseInt) and complain about it afterwards
 * @author ThomasC__
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

function isThisAMapCall (node) {
	return node.callee.type === "MemberExpression" && node.callee.property.name === 'map';
}

function isThisParseInt (node) {
	var firstArg = node.arguments[0];
	return firstArg.type === "Identifier" && firstArg.name === "parseInt";
}

module.exports = function(context) {

    // variables should be defined here

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
		"CallExpression": function (node) {
			if (isThisAMapCall(node) && isThisParseInt(node)) {
				context.report({
					node: node,
					message: "ARE YOU REALLY SURE ABOUT HOW THIS CODE WORKS ?"
				});
			}
		}
        // give me methods

    };

};

module.exports.schema = [
    // fill in your schema
];
