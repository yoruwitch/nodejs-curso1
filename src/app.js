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
// ---- CRUD OPERATIONS ----------

app.get("/books/:id", (req, res) => {
    // params é parâmetro
    const index = searchBook(req.params.id);
    res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
    //req.body -> corpo da requisição, para usar um POST, precisamos usar o body para enviar como request
    books.push(req.body);
    res.status(201).send("Book has been added successfully");
});

app.put("/books/:id", (req, res) => {
    const index = searchBook(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
    const index = searchBook(req.params.id);
    books.splice(index, 1);
    res.status(200).send("Book has been deleted successfully");
});

export default app;
