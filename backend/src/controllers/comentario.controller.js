import ComentarioService from "./../services/comentario.service.js"

export const CreateComentario = async (req, res) => {
    try {
        const comentario = await ComentarioService.createComentario(req.body)
        res.status(201).json(comentario)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const UpdateComentario = async (req, res) => {
    const { idcomentario } = req.params;
    const datosActualizados = req.body;

    try {
        if (isNaN(idcomentario)) {
            return res.status(400).json({ error: "ID de comentario inválido" });
        }

        const [numUpdated, [comentarioActualizado]] = await ComentarioService.updateComentario(idcomentario, datosActualizados);

        if (numUpdated === 0) {
            return res.status(404).json({ error: "comentario no encontrada" });
        }

        res.status(200).json(comentarioActualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const GetComentarioById = async (req, res) => {
    const { idcomentario } = req.params;

    try {
        if (isNaN(idcomentario)) {
            return res.status(400).json({ error: "ID de comentario inválido" });
        }

        const comentario = await ComentarioService.getComentarioById(idcomentario);

        if (!comentario) {
            return res.status(404).json({ error: "comentario no encontrado" });
        }

        res.status(200).json(comentario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const GetAllComentario = async (_req, res) => {
    try {
        const comentarios = await ComentarioService.getAllComentario();
        res.status(200).json(comentarios);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const DeleteComentario = async (req, res) => {
    const { idcomentario } = req.params;

    try {
        if (isNaN(idcomentario)) {
            return res.status(400).json({ error: "ID de comentario inválido" });
        }

        const comentarioEliminada = await ComentarioService.deleteComentario(idcomentario);

        if (!comentarioEliminada) {
            return res.status(404).json({ error: "comentario no encontrado" });
        }

        res.status(200).json({ message: "comentario eliminada correctamente" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
