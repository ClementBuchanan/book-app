DROP TABLE IF EXISTS books;
CREATE TABLE books (
  id SERIAL PRIMARY KEY, 
  author VARCHAR(255),
  title VARCHAR(255),
  isbn NUMERIC(20, 14),
  image_url VARCHAR(255),
  descripton VARCHAR(255)
);