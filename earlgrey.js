var EarlGrey = require("earlgrey");

exports.translate = function(load) {
  var output = EarlGrey
    .Generator({ es5: true, sourceMaps: "compute"})
    .generate(EarlGrey.source(load.source, load.address))
  load.source = output.code
  load.metadata.sourceMap = output.map
}
