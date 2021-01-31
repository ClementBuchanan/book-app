
# Project Name: The Book Searching App

**Author**: Clement Buchanan & Anthony Johnson
**Version**: 1.0.0

## Overview

This application will allow a user to search for books either by a title or author.nThey will then be able to edit information and save it to their library.

**Configure your repoon GitHub**

1. we created a new repository on GitHub named book_app.
1. Clone this repository into our 301 directory.
1. We will be working in this same repository for labs 11 through 14.

**Next steps**

1. **.env - with PORT number** -  This file is included in the .gitignore
1. **README.md** - with documentation regarding the lab and it’s current state of development.
1. **.gitignore** - with standard NodeJS configurations
1. **.eslintrc.json** - with Code 301 course standards for the linter
1. **package.json** - with all dependencies and any associated details related to configuration, including express, ejs, and superagent
  - Note that the package-lock.json file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.

**The file tree looks like this**

book_app (repository)
├──public
│  └── styles
│      ├── base.css
│      ├── layout.css
│      ├── modules.css
│      └── reset.css
├──views
│  └── pages
│      ├── error.ejs
│      ├── index.ejs
│      └── searches
│          └── show.ejs
├── .env
├── .eslintrc.json
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js

## Architecture
The app was buolt with EJS, HTML, CSS, JQuery, javascript

## Change Log
01-26-2021 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource.

01-27-2021 8:39pm - Application now has a search and rendering capabilities.

01-28-2021 4:59pm - Application now has a fully-functional sql database

## Credits and Collaborations

Anthony Johnson is my partner


**Feature 1**

Number and name of feature: _____SQL database, Index.ejs, route setup, book count in the db___________

Estimate of time needed to complete: __1 day___

Start time: __3:30___

Finish time: __2 days___

Actual time needed to complete: __3 days___

**Feature 2**

Number and name of feature: ___create layout page with partials, forms with submit button, GET from API, css.

Estimate of time needed to complete: _1 day____

Start time: __3:30pm___

Finish time: __2 days___

Actual time needed to complete: __2 days___