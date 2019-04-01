const express = require('express');
const { add, subtract } = require('math-lib');

const app = express();
const port = 3000;

// check the server logs to make sure this works server side
const addResult = add(5, 5);
const subtractResult = subtract(10, 3);
console.log('addResult', addResult);
console.log('subtractResult', subtractResult);

app.set('views', './dist');
app.use(express.static('dist'));

app.listen(port, () => console.log(`App running http://localhost:${port}!`));