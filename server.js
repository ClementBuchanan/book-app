'use strict';
require('dotenv').config();


// ====== packages =======
const PORT = process.env.PORT;
const express = require('express');
const superagent = require('superagent');
const cors = require('cors');
const app = express();
const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);
const key = process.env.BOOKS_API_KEY;
app.use(cors());

// const savedBookTitles = [];
// const searchType = req.body.searchType;
// const searchQuery = req.body.searchQuery;
// const url = `https://www.googleapis.com/books/v1/volumes/?q=+inauthor:${searchType}:${searchQuery}`;

// superagent.get(url).then(results => {
//   res.send(results.body.items);
//   const books = results.body.items.map(book =>
//     ({
//       title: book.volumeInfo.Title,
//       author: book.volumeInfo.author[0],
//       url: book.volumeInfo.imageLinks.thumbnail
//     })
//   );
//   res.render('search-results.ejs', { books: books });
// });

// ======== Routes ==========
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', showBooks);
app.get('/book-search', showSearchPage);
app.post('/book-search', makeBookSearch);
app.post('/save-book', saveBook);



// app.get('/', (req, res) => {
//   res.render('pages/searches/search.ejs');
// });

// ======= functions =============

function saveBook(req, res) {
  console.log(req.body);
  savedBookTitles.push(req.body.title);
  res.redirect('/');
}

function makeBookSearch(req, res) {
  const title = req.body.title;
  const url = `https://www.googleapis.com/books/v1/volumes?q=+intitle:${title}`;
  superagent.get(url).then(results => {
    console.log(results.body.items);
    const titles = results.body.items.map(items =>
      items.volumeInfo.title);
    const author = results.body.author.map(items =>
      items.volumeInfo.author);
    res.render('pages/searches/results.ejs', { titles: titles });
  });
}

function showSearchPage(req, res) {
  res.render('pages/searches/search.ejs');
}

function showBooks(req, res) {
  const savedBookTitles = ['book1', 'book2', 'book3']
  res.render('pages/index.ejs', { titles: savedBookTitles });
}

// ======= constructors ==========

function Books(data) {
  this.title = data.volumeInfo.title ? data.volumeInfo.title : 'Unknown Title';
  this.author = data.volumeInfo.author ? data.volumeInfo.author : 'Unknown autor';
  this.description = data.volumeInfo.description ? data.volumenfo.description : "Unknown description";
  if (data.volumeInfo.image[4] === 's') {
    const firstHalf = data.volumeInfo.image.slice(0, 3);
    const secondHalf = data.volumeInfo.image.slice(4);
    data.image = `${firstHalf}s${secondHalf}`;
  }
  this.image = data.volumeInfo.image ? data.volumeInfo.image : 'https://i.imgur.com/J5LVHEL.jpg';
}


// ====== start server =======
client.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`SERVER on ${PORT}`))
  })
  .catch(error => console.log(error))

