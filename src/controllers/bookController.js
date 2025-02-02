// Vai ser responsável por ser uma interface intermediária entre as requisições

import book from "../models/Book.js";

class BookController {
    static async listBooks(req, res) {
        try {
            /*.find() -> método do mongoose, se conecta com o banco MongoDb, encontrando tudo que tem,
   pois não foi especificado nada */
            const listBooks = await book.find({});
            //usando agora .json() pois o tipo de dado é mais complexo, um array de objetos
            res.status(200).json(listBooks);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Request failed`,
            });
        }
    }
    static async registerBook(req, res) {
        try {
            //req.body -> corpo da requisição, para usar um POST, precisamos usar o body para enviar como request
            // create() é um método do mongoose para criar dados
            const newBook = await book.create(req.body);
            res.status(201).json({
              message: "Created successfully",
              book: newBook,
            });
          } catch (error) {
            res.status(500).json({
              message: `Failed to register new book: ${error.message}`,
            });
        }
    }
}

export default BookController;
