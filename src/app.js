import express from "express";
const app = express();

// routers
import auth_routes from "./routes/auth_route.js";
import book_router from "./routes/books_route.js";
import student_router from "./routes/student_route.js";
import entry_exit_router from "./routes/entry_exit_route.js";
import borrow_return_router from "./routes/borrow_return.js";
import err_middleware from "./middleware/Error/error.middleware.js";

// middleware
import cors from "cors";
import cookieParser from "cookie-parser";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔥 CORS FIX (important)
app.use(cors({
  origin: "https://brabu-library.netlify.app",
  credentials: true
}));

// 🔥 COOKIE PARSER
app.use(cookieParser());

// 🔥 ROUTES
app.use("/auth", auth_routes);

// all protected routes
app.use("/brabu", book_router);
app.use("/brabu", student_router);
app.use("/brabu", entry_exit_router);
app.use("/brabu", borrow_return_router);

// 🔥 ERROR MIDDLEWARE (last)
app.use(err_middleware);

export default app;