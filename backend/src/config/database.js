import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
)

export const DBconexion = async () => {
    try {
        await sequelize.authenticate()
        console.log("Base de datos conectada!!")
    } catch (error) {
        console.log("Error al conectar con la base de datos:", error)
    }
}