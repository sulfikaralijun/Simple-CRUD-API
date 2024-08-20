import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.mjs";

const app = express();
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI || null;
if (uri === null) {
  console.error("message: No mongodb string connection provided");
  process.exit(1);
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});
app.use("/api/products", productRoutes);

// Connection to MongoDB and starting the server
const connectWithRetry = async () => {
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB connected...");
    app.listen(PORT, () => {
      console.log(`Node API app is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("MongoDB connection unsuccessful, retry after 5 seconds.");
    setTimeout(connectWithRetry, 5000);
  }
};
connectWithRetry();
