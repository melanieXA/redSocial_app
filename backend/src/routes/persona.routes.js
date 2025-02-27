import { Router } from "express";
import { CreatePersona, 
    UpdatePersona, 
    GetPersonaById, 
    GetAllPersona, 
    DeletePersona } 
    from "../controllers/persona.controller.js";

const router = Router();

router.post('/persona', CreatePersona);
router.put('/persona/:id', UpdatePersona);
router.get('/persona/:id', GetPersonaById);
router.get('/persona', GetAllPersona);
router.delete('/persona/:id', DeletePersona);

export default router;