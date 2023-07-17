const express = require('express');
const app = express();
const port = 3000;


// const { PythonShell } = require('python-shell');

// app.get('/predict', (req, res) => {
//   // Extract data from the request
//   const inputData = req.query.data;

//   // Configure PythonShell options
//   const options = {
//     mode: 'text',
//     pythonOptions: ['-u'], // unbuffered stdout
//     scriptPath: '/path/to/your/script/directory/',
//     args: [inputData],
//   };

//   // Execute the Python script
//   PythonShell.run('python_prediction_script.py', options, (err, results) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'An error occurred' });
//     }

//     // Process the prediction results
//     const prediction = results[0];
//     return res.json({ prediction });
//   });
// });


import * as tf from '@tensorflow/tfjs';

// import{ setBackend, LinearRegression}  from 'scikitjs';
import * as sk from 'scikitjs'
sk.setBackend(tf)

// setBackend(tf)

// Perform a linear regression
let X = [
    [2, 3],
    [1, 4],
    [5, 7]
  ]
  let y = [10, 14, 20]
  
  let lr = new sk.LinearRegression()
  await lr.fit(X, y)
  console.log(lr.coef)


  app.get('/', (req, res) => {
    res.send('Hello World, from express' + lr.coef);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

