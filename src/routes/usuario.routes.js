import { Router } from "express";
import { 
    CreateUsuario,
    UpdateUsuario,
    GetUsuarioById,
    GetAllUsuario,
    DeleteUsuario
 } from "../controllers/usuario.controller.js";

const router = Router();

router.post('/usuario', CreateUsuario);
router.put('/usuario/:id', UpdateUsuario);
router.get('/usuario/:id', GetUsuarioById);
router.get('/usuario', GetAllUsuario);
router.delete('/usuario/:id', DeleteUsuario);

export default router;