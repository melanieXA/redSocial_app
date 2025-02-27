import PersonaService from "./../services/persona.service.js"

export const CreatePersona = async (req, res) => {
    try {
        const persona = await PersonaService.createPersona(req.body)
        res.status(201).json(persona)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const UpdatePersona = async (req, res) => {
    const { idpersona } = req.params;
    const datosActualizados = req.body;

    try {
        if (isNaN(idpersona)) {
            return res.status(400).json({ error: "ID de la persona inválido" });
        }

        const [numUpdated, [personaActualizado]] = await PersonaService.updatePersona(idpersona, datosActualizados);

        if (numUpdated === 0) {
            return res.status(404).json({ error: "Persona no encontrada" });
        }

        res.status(200).json(personaActualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const GetPersonaById = async (req, res) => {
    const { idpersona } = req.params;

    try {
        if (isNaN(idpersona)) {
            return res.status(400).json({ error: "ID de la persona inválido" });
        }

        const persona = await PersonaService.getPersonaById(idpersona);

        if (!persona) {
            return res.status(404).json({ error: "persona no encontrado" });
        }

        res.status(200).json(persona);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const GetAllPersona = async (_req, res) => {
    try {
        const personas = await PersonaService.getAllPersonas();
        res.status(200).json(personas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const DeletePersona = async (req, res) => {
    const { idpersona } = req.params;

    try {
        if (isNaN(idpersona)) {
            return res.status(400).json({ error: "ID de persona inválido" });
        }

        const personaEliminada = await PersonaService.deletePersona(idUsuario);

        if (!personaEliminada) {
            return res.status(404).json({ error: "Persona no encontrado" });
        }

        res.status(200).json({ message: "Persona eliminada correctamente" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
