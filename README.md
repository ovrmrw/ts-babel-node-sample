# ts-babel-node-sample

---

A sample code in order to run TypeScript(.ts) files **without pre-compile**. (async/await is also enabled!)

### What do this do internally?
.ts -> [tsc target:es2015] -> .js(es2015) -> [babel presets:latest] -> .js(es5) -> Run on the fly!

|Compiler|version|
|:--|:--|
|typescript|2.0.3|
|babel-preset-latest|6.14.0|

||My Environments|
|:--|:--|
|OS|Windows 10 Pro 64bit or 7 Pro 32bit|
|Editor|VSCode (stable)|
|node --version|v6.3.1|

### Setup
```
$ npm install
```

### Run (ts files directly)
```
$ npm run ts
or
$ npm run ts:alt
```

### Run (js files after build)
```
$ npm start
```
