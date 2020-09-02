"use strict";
/*
- create new project : npm init
- install typescript package : npm install typescript
- updated package.json by adding "tsc" : "tsc" to scripts tag
- initialize typescript project : npx tsc --init
- install express : npm install express @types/express

- compile code : npm run tsc
- run the app : node server/server.js

*/
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('Hello, world!');
});
app.listen(3000, function () {
    console.log('app is listening on port 3000!');
});
