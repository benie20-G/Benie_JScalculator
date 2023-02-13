const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


app.get('/adding_numbers', (req, res) => {

 res.statusCode(200)

  const numbers_array = req.body.numbers;

  let sum = 0;

  for (i = 0; i < numbers_array.length; i++) {
    sum += numbers_array[i];
  }

  res.send({ result:sum });

});


app.get('/multiplying_numbers', (req, res) => {

    res.statusCode(200)

  const numbers_array = req.body.numbers;

  let product = 1;
  for ( i = 0; i < numbers_array.length; i++) {
    product *= numbers_array[i];
  }

 
  res.send({result:product });
});


const port = 3000;
app.listen(port, () => console.log(`application is running on the port ${port}...`));
