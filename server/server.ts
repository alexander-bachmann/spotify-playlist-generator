/*
- create new project : npm init
- install typescript package : npm install typescript
- updated package.json by adding "tsc" : "tsc" to scripts tag
- initialize typescript project : npx tsc --init
- install express : npm install express @types/express
- compile code : npm run tsc
- run the app : node server/server.js

go to localhost:3000 in your browser
*/

import express = require('express');

const app: express.Application = express();

app.get('/', function(req, res) {
    res.send('Hello, world!');
});

app.listen(3000, function() {
    console.log('app is listening on port 3000!');
});