import express from "express";

const app = express();
//middlware para converter objetos em JSON
app.use(express.json());

const books = [
    { id: 1, title: "To Kill a Mockingbird" },
    { id: 2, title: "1984" },
];

app.get("/", (req, res) => {
    res.status(200).send("First route in Node.Js");
});

app.get("/books", (req, res) => {
    //usando agora .json() pois o tipo de dado é mais complexo, um array de objetos
    res.status(200).json(books);
});

app.post("/books", (req, res) => {
    //req.body -> corpo da requisição, para usar um POST, precisamos usar o body para enviar como request
    books.push(req.body);
    res.status(201).send("Book has been added successfully");
});

export default app;
