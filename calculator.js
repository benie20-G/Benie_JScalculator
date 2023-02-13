const express = require('express');

const app = express();


app.get('/adding_numbers', (req, res) => {  //getting API for addition

  const numbers_array = req.query.numbers;//taking the array of numbers to be added

  let sum = 0;

  for (i = 0; i < numbers_array.length; i++) {
    sum += numbers_array[i];
  }

  res.send({ result:sum });

})


app.get('/multiplying_numbers', (req, res) => { //getting API for multiplication


  const numbers_array = req.query.numbers;//taking te array of numbers to be mutiplied

  let product = 1;
  for ( i = 0; i < numbers_array.length; i++) {
    product *= numbers_array[i];
  }

 
  res.send({result:product });
});


const port = 3000;
app.listen(port, () => console.log(`application is running on the port ${port}`));
