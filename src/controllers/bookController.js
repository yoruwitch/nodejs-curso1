// Vai ser responsável por ser uma interface intermediária entre as requisições

import book from "../models/Book.js";

class BookController {
    static async listBooks(req, res) {
        try {
            /*.find() -> método do mongoose, se conecta com o banco MongoDb, encontrando tudo que tem,
   pois não foi especificado nada */
            const listBooks = await book.find({});
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
    static async listBookById(req, res) {
        try {
            const id = req.params.id;
            /*.findById() -> método do mongoose, se conecta com o banco MongoDb, encontrando pelo ID */
            const foundBook = await book.findById(id);
            res.status(200).json(foundBook);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Request failed fetching a book`,
            });
        }
    }
    static async updateBookById(req, res) {
        try {
            const id = req.params.id;

            /*.findByIdAndUpdate() -> método do mongoose, se conecta com o banco MongoDb,
             encontrando pelo ID e atualizando o registro. A função precisa do ID e do body da requisição para
             saber o que precisa ser atualizado */
            await book.findByIdAndUpdate(id, req.body);

            res.status(200).json({
                message: "The book has been updated successfully",
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Request failed updating a book`,
            });
        }
    }
    static async deleteBookById(req, res) {
        try {
            const id = req.params.id;

            /*.findByIdAndUpdate() -> método do mongoose, se conecta com o banco MongoDb,
             encontrando pelo ID e atualizando o registro. A função precisa do ID e do body da requisão para
             saber o que precisa ser atulizado */
            await book.findByIdAndDelete(id);

            res.status(200).json({
                message: "The book has been deleted successfully",
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Request failed deleting the book`,
            });
        }
    }
}

export default BookController;
// app.delete("/books/:id", (req, res) => {
//     const index = searchBook(req.params.id);
//     books.splice(index, 1);
//     res.status(200).send("Book has been deleted successfully");
// });
