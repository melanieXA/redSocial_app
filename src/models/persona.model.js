import { sequelize } from "./../config/database.js";
import { DataTypes } from "sequelize";

const Persona = sequelize.define('personas', {
    idPersona: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    modelName: 'persona'
});

export default Persona;
