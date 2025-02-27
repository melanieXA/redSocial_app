import {sequelize} from "./../config/database.js";
import { DataTypes } from "sequelize";

const Comentario = sequelize.define('comentarios', {
    idcomentario:{
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
    },
    publicacionid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'publicaciones',
            key: 'idpublicacion'
        }
    }
}, {
    timestamps: true,
    modelName: 'comentario',
})

export default Comentario;