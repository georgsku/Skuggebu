const { readFile } = require('fs').promises
const express = require('express')
const bodyParser = require("body-parser");

const app = express();
const port =  4067

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* 
  GET
*/

app.get('/',  async (request, response) => {

    response.send(await readFile('./index.html', 'utf8'));
    
});

app.listen(port, () => console.log(`App available on http://localhost:${port}`))