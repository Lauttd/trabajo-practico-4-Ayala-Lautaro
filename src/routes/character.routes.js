import express from 'express';
import { createPersonajes, getAllPersonajes,deletePersonajes,getPersonajesById, updatePersonajes } from '../controllers/character.controllers.js';

const router = express.Router();

router.post("/api/characters", createPersonajes);
router.get("/api/characters", getAllPersonajes);
router.get("/api/characters/:id", getPersonajesById);
router.put("/api/characters/:id", updatePersonajes);
router.delete("/api/characters/:id", deletePersonajes);

export default router;


