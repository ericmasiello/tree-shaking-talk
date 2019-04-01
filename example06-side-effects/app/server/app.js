const express = require('express');
const { add, subtract, Pairs } = require('math-lib');

const app = express();
const port = 3000;

const threeAndTwo = new Pairs(3, 2);
const resultOfThreeAndTwoAdd = threeAndTwo.add();
console.log('resultOfThreeAndTwoAdd', resultOfThreeAndTwoAdd);

// check the server logs to make sure this works server side
const addResult = add(5, 5);
const subtractResult = subtract(10, 3);
console.log('addResult', addResult);
console.log('subtractResult', subtractResult);

app.set('views', './dist');
app.use(express.static('dist'));

app.listen(port, () => console.log(`App running http://localhost:${port}!`));