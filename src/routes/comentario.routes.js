import { Router } from "express";
import { 
    CreateComentario,
    UpdateComentario,
    GetComentarioById,
    GetAllComentario,
    DeleteComentario
 } from "../controllers/comentario.controller.js";

const router = Router();

router.post('/comentario', CreateComentario);
router.put('/comentario/:id', UpdateComentario);
router.get('/comentario/:id', GetComentarioById);
router.get('/comentario', GetAllComentario);
router.delete('/comentario/:id', DeleteComentario);

export default router;