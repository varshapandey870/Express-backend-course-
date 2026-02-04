import express from "express" ;
import dotenv from "dotenv";

dotenv.config();

const app = express();

//middlewares
app.use(express.json());


const PORT = process.env.PORT ||3000;


app.listen(PORT , () => {
    console.log(`server is running at http://localhost:${PORT}....`);
});