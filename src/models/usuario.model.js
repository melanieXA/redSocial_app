import {sequelize} from "./../config/database.js";
import { DataTypes } from "sequelize";

const Usuario = sequelize.define('usuarios', {
    idusuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    personaid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'personas',
            key: 'idpersona'
        }
    }
}, {
    timestamps: true,
    modelName: 'usuario',
})

export default Usuario;