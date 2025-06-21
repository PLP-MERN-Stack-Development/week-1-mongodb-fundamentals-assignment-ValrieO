
# PLP Bookstore MongoDB Project

## How to Run

### 1️⃣ Insert Book Data
To insert the book documents into your MongoDB collection:

- Open your MongoDB shell (`mongosh`)
- Switch to the `plp_bookstore` database:
  ```
  use plp_bookstore
  ```
- Run the contents of `insert_books.js` by typing:
  ```
  load("insert_books.js")
  ```

This will add 10 sample books into the `books` collection.

---

### 2️⃣ Run Queries
In the MongoDB shell:

- Make sure you're using the `plp_bookstore` database:
  ```
  use plp_bookstore
  ```

- Then you can copy-paste the queries from `queries.js` one by one to test them.

---

### 3️⃣ Screenshot
A sample MongoDB Compass screenshot is included in the `screenshots/` folder as `compass_sample_data.png`.

---

## Files Included
- `insert_books.js` — script to insert sample book data
- `queries.js` — file containing required MongoDB queries
- `screenshots/compass_sample_data.png` — sample screenshot
- `README.md` — this file
