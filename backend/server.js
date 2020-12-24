import express from "express";
import "colors";
// import products from './data/products.js';
import dotenv from "dotenv";
import connectDB from "./confing/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("服务器运行...");
});
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `服务器在${process.env.NODE_ENV}模式下，${PORT}端口号运行`.green.bold
  );
});
