'use strict';

var eg = require("earlgrey");
var url = require("url");

exports.translate = function (load) {
  console.log("systemjs translating " + load.address)
  var result,
      generator,
      source = eg.Source(load.source, url.parse(load.address).pathname);
  try { generator = eg.Generator({ es5: false, sourceMaps: "compute"}); }
  catch (e) { console.log(e); throw e; }
  console.log("Generator built")
  result = generator.generate(source);
  console.log("translation complete!");
  load.source = result.code;
  load.metadata.sourceMap = result.sourceMap;
  return load;
}
