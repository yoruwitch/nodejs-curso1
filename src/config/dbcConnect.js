import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// precisa ser async por fazer conexão com a internet
async function connectDatabase() {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return mongoose.connection;
}

export default connectDatabase;
