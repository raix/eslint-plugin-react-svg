module.exports = {
  svgTags: [
    // General list of all svg relevant tags
    "a",
    "animate",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "defs",
    "desc",
    "discard",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "foreignObject",
    "g",
    "hatch",
    "hatchpath",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "metadata",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "solidcolor",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tspan",
    "unknown",
    "use",
    "view",
  ],
  uselessIfEmptyTags: [
    // Tags that will not render if empty
    "svg",
    "defs",
    "desc",
    "g",
    "script",
    "style",
    "svg",
    "text",
    "title",
    "view",
  ],
  shouldOmitTags: [
    // Tags that should be omitted
    "title",
    "desc"
  ],
  referenceByHref: [
    "use", // url?, reference svg element or html element
    "linearGradient", // url, reference: linearGradient | radialGradient
    "radialGradient", // url, reference: linearGradient | radialGradient
    "pattern", // url, reference: pattern
  ],
  referenceAttributeId: [
    "href",
    "xlinkHref", // should use "href" as the "xlink" is deprecated from v2
  ],
  referenceAttributeUrl: [
    "mask",
    "clipPath",
    "mpath",
    "textPath", // , source must implement SVGGeometryElement
    "fill", // url, source: linearGradient | radialGradient
    "stroke", // url, source: linearGradient | radialGradient
    "marker", // reference: marker
    "markerStart", // reference: marker
    "markerMid", // reference: marker
    "markerEnd", // reference: marker
    "shapeInside", // reference: SVGGeometryElement
    "shapeSubtract", // reference: SVGGeometryElement
  ]
};
