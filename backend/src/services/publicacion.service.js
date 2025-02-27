import Publicacion from "./../models/publicacion.model.js";

class PublicacionService {
    async createPublicacion(publicacion) {
        return await Publicacion.create(publicacion);
    }

    async getPublicacionById(idpublicacion) {
        return await Publicacion.findByPK(idpublicacion);
    }

    async getAllPublicacion() {
        return await Publicacion.findAll();
    }

    async updatePublicacion(idpublicacion, datosActualizados) {
        return await Publicacion.update(datosActualizados, {
            where: { idpublicacion },
            returing: true
        });
    }

    async deletePublicacion(idpublicacion) {
        return await Publicacion.destroy({
            where: { idpublicacion }
        });
    }
}

export default new PublicacionService();