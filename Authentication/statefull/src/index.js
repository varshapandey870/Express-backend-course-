import express from "express";
import dotenv from "dotenv";
import session from "express-session";
dotenv.config();

const app = express();

//middlewares
app.use(express.json());


const PORT = process.env.PORT;


app.listen(PORT , () => {
    console.log(`server is running at http://localhost:${PORT}....`);
});