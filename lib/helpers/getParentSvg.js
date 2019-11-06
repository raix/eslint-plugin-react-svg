module.exports = function getParentSvg(node) {
  if (((node.openingElement||{}).name||{}).name === "svg") {
      return node;
  }
  if (node.parent) {
      return getParentSvg(node.parent);
  }
};
