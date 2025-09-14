import express from "express";
import dotenv from "dotenv";
import brandRoutes from "./routes/brandRoutes.js"


// configure environment variables
dotenv.config();

// verble
const PORT = process.env.PORT || 6060;

// app init
const app = express();

// support
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
app.use("/api/v1/brand", brandRoutes)


// listen

app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`);
    
})