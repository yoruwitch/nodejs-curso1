import express from "express";
import books from "./booksRoutes.js";
import authors from "./authorsRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) =>
        res.status(200).send("First route in Node.Js")
    );
    //middlware para converter objetos em JSON
    app.use(express.json(), books, authors);
};

export default routes;
