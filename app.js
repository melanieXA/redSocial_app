import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import routePersona from "./src/routes/persona.routes.js"
import { DBconexion } from "./src/config/database.js";
import { syncDatabase } from "./src/models/sync.js";

dotenv.config();

const port = process.env.PORT;

syncDatabase();

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(routePersona);

app.listen(port, () => { console.log(`Servidor escuchando en el puerto: ${port}`) },
DBconexion());