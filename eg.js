'use strict';

var eg = require("earlgrey");
var url = require("url");

exports.translate = function (load) {
  console.log("systemjs translating " + load.address)
  var source = eg.Source(load.source, url.parse(load.address).pathname);
  var generator;
  try {
    generator = new eg.Generator({ es5: false, sourceMaps: "compute"});
  } catch(err) { console.log("generator creation failed"); console.log(err); }
  var result;
  try {
    result = generator.generate(source);
  } catch(err) {
    console.log("generator failed");
    console.log(err);
  }
  console.log("translation complete!");
  load.source = result.code;
  load.metadata.sourceMap = result.sourceMap;
  return load;
}
