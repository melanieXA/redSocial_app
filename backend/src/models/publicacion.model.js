import {sequelize} from "./../config/database.js";
import { DataTypes } from "sequelize";

const Publicacion = sequelize.define('publicaciones', {
    idpublicacion:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuarioid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'idusuario'
        }
    }
}, {
    timestamps: true,
    modelName: 'publicacion',
})

export default Publicacion;