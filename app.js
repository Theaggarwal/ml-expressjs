const express = require('express');
const app = express();
const port = 3000;

const tf = require('@tensorflow/tfjs');
const sk = require('scikitjs');
sk.setBackend(tf)

const pd = require("node-pandas")

let dataset = 'Dataset.csv'
bd=pd.readCsv(dataset,delimiter=';')

let X = [
  [2, 3],
  [1, 4],
  [5, 7]
]
let Y = [10, 14, 20]

// let X = [2,4,6,8] 
// let Y = [3,7,5,10]

// applying linear regression.
let lr = new sk.LinearRegression({ fitIntercept: false })

async function train() {
  await lr.fit(X, Y)
  console.log(lr.coef)
  return lr.coef;
}

async function predict() {
  await lr.fit(X, Y)
  console.log(lr.coef)
  lr.predict([[2,3]]) // roughly [30, 40];
  // return lr.Y;
  return lr.coef;
}

let ss = new sk.DecisionTreeClassifier();


app.get('/', async (req, res) => {
  res.send('Hello World, from express');
});

app.get('/train', async (req, res) => {
    ss = await train();
    res.send('Hello World, from express' + ss);
});

app.get('/predict', async (req, res) => {
  ss = await predict();

  res.send('Hello World, from express' + ss);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

