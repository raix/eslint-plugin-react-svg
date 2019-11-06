module.exports = function getJSXIdentifier(node) {
  if (node === undefined) {
      return;
  }
  if (node.type === "JSXIdentifier") {
      return node;
  }
  if (node.name !== undefined) {
    return getJSXIdentifier(node.name);
  }
  if (node.openingElement !== undefined) {
    return getJSXIdentifier(node.openingElement);
  }
  return undefined;
};
