import express from "express";
import mongoose from "mongoose";

const uri =
  "mongodb+srv://sulfikaralijun:4oarcZyyqtGsOJbi@backenddb.lpzjx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB";

import productRoutes from "./routes/productRoutes.mjs";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/products", productRoutes);

const connectWithRetry = async () => {
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB connected...");
    app.listen(3000, () => {
      console.log("Node API app is running on port 3000");
    });
  } catch (error) {
    console.log("MongoDB connection unsuccessful, retry after 5 seconds.");
    setTimeout(connectWithRetry, 5000);
  }
};
connectWithRetry();
