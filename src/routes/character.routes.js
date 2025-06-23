import express from 'express';
import { createPersonajes, getAllPersonajes,deletePersonajes,getPersonajesById, updatePersonajes } from '../controllers/character.controllers.js';

const router = express.Router();

router.post("/create", createPersonajes);
router.get("/character", getAllPersonajes);
router.get("/character/:id", getPersonajesById);
router.put("/actualizar/:id", updatePersonajes);
router.delete("/eliminar/:id", deletePersonajes);

export default router;


