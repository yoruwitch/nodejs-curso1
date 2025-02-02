// É responsável por gerenciar as rotas da API

import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/authors", AuthorController.listAuthors);
routes.get("/authors/:id", AuthorController.listAuthorById);
routes.post("/authors/", AuthorController.registerAuthor);
routes.put("/authors/:id", AuthorController.updateAuthorById);
routes.delete("/authors/:id", AuthorController.deleteAuthorsById);

export default routes;
