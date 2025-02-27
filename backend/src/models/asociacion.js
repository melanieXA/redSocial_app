import Persona from "./persona.model.js";
import Usuario from "./usuario.model.js";
import Publicacion from "./publicacion.model.js";
import Comentario from "./comentario.model.js";

export const Asociaciones = () => {
    Persona.hasMany(Usuario, { foreignKey: 'personaid' });
    Usuario.belongsTo(Persona, { foreignKey: 'personaid' });

    Usuario.hasMany(Publicacion, { foreignKey: 'usuarioid' });
    Publicacion.belongsTo(Usuario, { foreignKey: 'usuarioid' });

    Usuario.hasMany(Comentario, { foreignKey: 'usuarioid' });
    Comentario.belongsTo(Usuario, { foreignKey: 'usuarioid' });

    Publicacion.hasMany(Comentario, { foreignKey: 'publicacionid' });
    Comentario.belongsTo(Publicacion, { foreignKey: 'publicacionid' });
}