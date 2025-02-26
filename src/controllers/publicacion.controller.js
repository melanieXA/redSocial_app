import PublicacionService from "./../services/publicacion.service.js"

export const CreatePublicacion = async (req, res) => {
    try {
        const publicacion = await PublicacionService.createPublicacion(req.body)
        res.status(201).json(publicacion)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const UpdatePublicacion = async (req, res) => {
    const { idpublicacion } = req.params;
    const datosActualizados = req.body;

    try {
        if (isNaN(idpublicacion)) {
            return res.status(400).json({ error: "ID de publicacion inválido" });
        }

        const [numUpdated, [publicacionActualizado]] = await PublicacionService.updatePublicacion(idpublicacion, datosActualizados);

        if (numUpdated === 0) {
            return res.status(404).json({ error: "publicacion no encontrada" });
        }

        res.status(200).json(publicacionActualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const GetPublicacionById = async (req, res) => {
    const { idpublicacion } = req.params;

    try {
        if (isNaN(idpublicacion)) {
            return res.status(400).json({ error: "ID de publicacion inválido" });
        }

        const publicacion = await PublicacionService.getPublicacionById(idpublicacion);

        if (!publicacion) {
            return res.status(404).json({ error: "publicacion no encontrado" });
        }

        res.status(200).json(publicacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const GetAllPublicacion = async (_req, res) => {
    try {
        const publicacions = await PublicacionService.getAllPublicacion();
        res.status(200).json(publicacions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const DeletePublicacion = async (req, res) => {
    const { idpublicacion } = req.params;

    try {
        if (isNaN(idpublicacion)) {
            return res.status(400).json({ error: "ID de publicacion inválido" });
        }

        const publicacionEliminada = await PublicacionService.deletePublicacion(idpublicacion);

        if (!publicacionEliminada) {
            return res.status(404).json({ error: "publicacion no encontrado" });
        }

        res.status(200).json({ message: "publicacion eliminada correctamente" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
