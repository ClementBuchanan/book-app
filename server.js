'use strict';
require('dotenv').config();

// ====== packages =======
const PORT = process.env.PORT;
const express = require('express');
const superagent = require('superagent');
const cors = require('cors');
const app = express();

app.use(cors());

const shoppingList = [
  {product: 'Books', title: 20},
  {}
]

// ============ routes ==========
app.use(express.urlencoded({extended: true}));


app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('pages/searches/new.ejs')
});

// app.get('/Hello', showHome);


app.listen(PORT, () => console.log(`SERVER on ${PORT}`));



// ========= server setup =========

//============ Global variable ===========






// ==========  local requests ============


// ====== functions ===========


// ====== start server =======