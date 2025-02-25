import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(express.json());

app.listen(port, () => { console.log(`Servidor escuchando en el puerto: ${port}`) })