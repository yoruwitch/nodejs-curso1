import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

//instância da conexão com o Mongo, colocando await por se tratar de async
const connection = await connectDatabase();

// "error" é um evento do mongoose
connection.on("error", (error) => {
    console.error("Connection error", error);
});

connection.once("open", () => {
    console.log("Connection successfull!");
});

const app = express();
routes(app);

export default app;
