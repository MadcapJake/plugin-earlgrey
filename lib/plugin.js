import {Generator, source} from "npm:earlgrey@0.0.10";

export function translate(load) {
  console.log(`systemjs translating ${load.address}`)

  let result = Generator({ sourceMaps: "compute" })
    .generate(source(load.source, load.address));

  load.source = result.js;
  load.metadata.sourceMap = result.sourceMap;
  load.metadata.format = "register";
  return load
}
