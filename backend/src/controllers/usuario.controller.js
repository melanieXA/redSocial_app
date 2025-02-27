import UsuarioService from "./../services/usuario.service.js"

export const CreateUsuario = async (req, res) => {
    try {
        const usuario = await UsuarioService.createUsuario(req.body)
        res.status(201).json(usuario)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const UpdateUsuario = async (req, res) => {
    const { idusuario } = req.params;
    const datosActualizados = req.body;

    try {
        if (isNaN(idusuario)) {
            return res.status(400).json({ error: "ID de usuario inválido" });
        }

        const [numUpdated, [usuarioActualizado]] = await UsuarioService.updateUsuario(idusuario, datosActualizados);

        if (numUpdated === 0) {
            return res.status(404).json({ error: "usuario no encontrada" });
        }

        res.status(200).json(usuarioActualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const GetUsuarioById = async (req, res) => {
    const { idusuario } = req.params;

    try {
        if (isNaN(idusuario)) {
            return res.status(400).json({ error: "ID de usuario inválido" });
        }

        const usuario = await UsuarioService.getUsuarioById(idusuario);

        if (!usuario) {
            return res.status(404).json({ error: "usuario no encontrado" });
        }

        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const GetAllUsuario = async (_req, res) => {
    try {
        const usuarios = await UsuarioService.getAllUsuario();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const DeleteUsuario = async (req, res) => {
    const { idusuario } = req.params;

    try {
        if (isNaN(idusuario)) {
            return res.status(400).json({ error: "ID de usuario inválido" });
        }

        const usuarioEliminada = await UsuarioService.deleteUsuario(idusuario);

        if (!usuarioEliminada) {
            return res.status(404).json({ error: "usuario no encontrado" });
        }

        res.status(200).json({ message: "usuario eliminada correctamente" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
