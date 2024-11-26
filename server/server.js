import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import { products } from "./products.js";
dotenv.config();

const corsOptions = {
    origin: 'http://localhost:5173'
}


const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors(corsOptions))

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const p_id = parseInt(req.params.id)
  const product = products.find((prdt) => prdt.id === p_id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
});
