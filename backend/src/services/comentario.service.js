import Comentario from "./../models/comentario.model.js";

class ComentarioService {
    async createComentario(comentario) {
        return await Comentario.create(comentario);
    }

    async getComentarioById(idcomentario) {
        return await Comentario.findByPK(idcomentario);
    }

    async getAllComentario() {
        return await Comentario.findAll();
    }

    async updateComentario(idcomentario, datosActualizados) {
        return await Comentario.update(datosActualizados, {
            where: { idcomentario },
            returing: true
        });
    }

    async deleteComentario(idcomentario) {
        return await Comentario.destroy({
            where: { idcomentario }
        });
    }
}

export default new ComentarioService();