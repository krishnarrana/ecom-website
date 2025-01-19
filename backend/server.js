import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import products from "./data/products.js";

dotenv.config();

const port = process.env.PORT || 3030;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    console.log("This is test");
    res.send("API is running");
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
});

const server = app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});

// Graceful shutdown
process.on("SIGINT", () => {
    server.close(() => {
        console.log("Server closed gracefully");
        process.exit(0);
    });
});

process.on("SIGTERM", () => {
    server.close(() => {
        console.log("Server closed due to application restart");
        process.exit(0);
    });
});
