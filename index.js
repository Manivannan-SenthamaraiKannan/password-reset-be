import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import cors from "cors";
import UserRouter from "./Routes/user.route.js";

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());

//PORT
const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("mongodb is connected");

//Routes
app.use("/api/user", UserRouter);

//Home
app.get("/", function (request, response) {
    response.send("<h1>Password Reset Flow<h1>");
});

app.listen(PORT, () => console.log(`http:localhost: ${PORT}`));

export { client };