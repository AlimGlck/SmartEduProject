const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const ejs = require('ejs');
const methodOverride = require('method-override');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.status(200).render('index',{
    page_name:"index",
  });
});

app.get('/about', (req, res) => {
  res.status(200).render('about',{
    page_name:"about",
  });
});

const port = 3000;
app.listen(port, () => {
  console.log('started');
});
