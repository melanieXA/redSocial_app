import Usuario from "./../models/usuario.model.js";

class UsuarioService {
    async createUsuario(usuario) {
        return await Usuario.create(usuario);
    }

    async getUsuarioById(idusuario) {
        return await Usuario.findByPK(idusuario);
    }

    async getAllUsuario() {
        return await Usuario.findAll();
    }

    async updateUsuario(idusuario, datosActualizados) {
        return await Usuario.update(datosActualizados, {
            where: { idusuario },
            returing: true
        });
    }

    async deleteUsuario(idusuario) {
        return await Usuario.destroy({
            where: { idusuario }
        });
    }
}

export default new UsuarioService();