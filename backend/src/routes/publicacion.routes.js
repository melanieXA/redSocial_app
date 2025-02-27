import { Router } from "express";
import { 
    CreatePublicacion,
    UpdatePublicacion,
    GetPublicacionById,
    GetAllPublicacion,
    DeletePublicacion
 } from "../controllers/publicacion.controller.js";

const router = Router();

router.post('/publicacion', CreatePublicacion);
router.put('/publicacion/:id', UpdatePublicacion);
router.get('/publicacion/:id', GetPublicacionById);
router.get('/publicacion', GetAllPublicacion);
router.delete('/publicacion/:id', DeletePublicacion);

export default router;