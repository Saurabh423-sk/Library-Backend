import express from "express";

import create_book from "../controllers/Books/create_book.js";
import get_book from "../controllers/Books/get_books.js";
import get_book_bycourse from "../controllers/Books/get_book_bycoursce.js";
import delete_book from "../controllers/Books/delete_book.js";

import auth from "../middleware/auth/user_auth.js";
import admin_auth from "../middleware/auth/isadmin.js";

import createBook_validator from "../validators/books/admin/createBook.validator.js";
import validate from "../middleware/validate/validate.js";
import params_id_validator from "../validators/students/params_id.validator.js";
import get_courseBook_validator from "../validators/books/student/get_courseBook.validator.js";

const book_router = express.Router();

book_router.post(
  "/books",
  admin_auth,
  createBook_validator,
  validate,
  create_book,
);

book_router.get("/books", auth, get_book);

book_router.delete(
  "/books/:id",
  admin_auth,
  params_id_validator,
  validate,
  delete_book,
);

book_router.post(
  "/books/bycourse",
  auth,
  get_courseBook_validator,
  validate,
  get_book_bycourse,
);

export default book_router;
