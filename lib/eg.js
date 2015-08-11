import eg from "npm:earlgrey";

export function translate(load) {
  console.log(`systemjs translating ${load.address}`)

  let result = eg.Generator({ sourceMaps: "compute" })
    .generate(eg.source(load.source, load.address));

  load.source = result.js;
  load.metadata.sourceMap = result.sourceMap;
  load.metadata.format = "register";
  return load
}
