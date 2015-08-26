'use strict';

var eg = require("earlgrey");
var url = require("url");

exports.translate = function (load) {
  return (function (result) {
    load.source = result.code;
    load.metadata.sourceMap = result.map;
    return load
  })(eg.Generator({ es5: false, sourceMaps: "compute"})
    .generate(eg.Source(load.source, url.parse(load.address).pathname)))
}
