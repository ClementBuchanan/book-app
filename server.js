'use strict';
require('dotenv').config();

// ====== packages =======
const PORT = process.env.PORT;
const express = require('express');
const superagent = require('superagent');
const cors = require('cors');
const app = express();
const key = BOOKS_API_KEY;
const url = 'https://language.googleapis.com/v1/documents:analyzeEntities?key=BOOKS_API_KEY';

superagent.get(url){
  if 
}

app.get('/book-search', showSearchPage);
app.use(cors());



function Books (data) {
  this.title = data.title ? data.title : 'Unknown Title';
  this.author = data.author ? data.author : 'Unknown autor';
  this.image = data.image ? data.image : 'https://i.imgur.com/J5LVHEL.jpg';



}

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