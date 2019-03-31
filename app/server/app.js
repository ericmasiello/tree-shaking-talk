const express = require('express');
const { add, subtract } = require('math-lib');

const app = express();
const port = 3000;

// check the server logs to make sure this works server side
add(5, 5);
subtract(10, 3);

app.set('views', './dist');
app.use(express.static('dist'));

app.listen(port, () => console.log(`App running http://localhost:${port}!`));