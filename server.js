'use strict';
require('dotenv').config();

// ====== packages =======
const PORT = process.env.PORT;
const express = require('express');
const superagent = require('superagent');
const cors = require('cors');
const app = express();
const key = process.env.BOOKS_API_KEY;
const url = 'https://language.googleapis.com/v1/documents:analyzeEntities?key=BOOKS_API_KEY';

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.get('/', showBooks);
app.get('/book-search', showSearchPage);
app.post('/book-search', makeBookSearch);

app.use(cors());

// ============ routes ==========

app.get('/', (req, res) => {
  res.render('pages/searches/new.ejs')
});
app.get('/book-search', showSearchPage);

// ======= functions =============

function makeBookSearch(req, res) {
  const title = req.body.title;
  const url = `https://www.googleapis.com/books/v1/volumes?q=+intitle:${title}`;
  superagent.get(url).then(stuff => {
    console.log(stuff.body.items);
    const titles = stuff.body.items.map(items =>
      items.volumeInfo.title);
    res.render('pages/searches/show.ejs', { titles: titles });
  });
}

function showSearchPage(req, res) {
  res.render('pages/searches/new.ejs');
}

function showBooks(req, res) {
  res.render('pages/searches/new.ejs');
}


// ======= constructors ==========

function Books(data) {
  this.title = data.title ? data.title : 'Unknown Title';
  this.author = data.author ? data.author : 'Unknown autor';
  if (data.image[4] === 's'){
    const firstHalf = data.image.slice(0,3);
    const secondHalf = data.image.slice(4);
    data.image = `${firstHalf}s${secondHalf}`;
  }
  this.image = data.image ? data.image : 'https://i.imgur.com/J5LVHEL.jpg';
}


// ====== start server =======

app.listen(PORT, () => console.log(`SERVER on ${PORT}`));