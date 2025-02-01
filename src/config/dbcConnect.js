import mongoose, { mongo } from "mongoose";

// precisa ser async por fazer conexão com a internet
async function connectDatabase() {
    mongoose.connect(
        "mongodb+srv://yoruwitch4:admin123@bookstore0.dsi0x.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Bookstore0"
    );
    return mongoose.connection;
}

export default connectDatabase;
