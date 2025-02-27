import Persona from "./../models/persona.model.js";

class PersonaService {
    async createPersona(persona) {
        return await Persona.create(persona);
    }

    async getPersonaById(idpersona) {
        return await Persona.findByPk(idpersona);
    }

    async getAllPersonas() {
        return await Persona.findAll();
    }

    async updatePersona(idpersona, datosActualizados) {
        return await Persona.update(datosActualizados, {
            where: { idpersona },
            returning: true
        });
    }

    async deletePersona(idPersona) {
        return await Persona.destroy({
            where: { idPersona }
        });
    }
}

export default new PersonaService();
