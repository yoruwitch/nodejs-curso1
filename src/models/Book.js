import mongoose from "mongoose";

/* -> Schema é um objeto de configuração que define a estrutura
  e as propriedades de um documento
*/
const bookSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        title: { type: String, required: true },
        publisher: { type: String },
        price: { type: Number },
        pages: { type: Number },
    },
    { versionKey: false }
);

/* -> O primeiro parâmetro é o nome da coleção criada e o segundo parâmetro
se refere ao Schema criado anteriormente
*/

// -> Um modelo é um objeto que representa uma coleção na base de dados

const book = mongoose.model("books", bookSchema);

export default book;
