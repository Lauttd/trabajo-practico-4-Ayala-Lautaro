import personajesDb from "../models/character.model.js";


//Crear, obtener personajes por id, obtener todos los personajes, actualizar y eliminar personajes.
export const createPersonajes = async (req, res) => {
 
 try {

  //destructurando el req.body 
const {
  name,  ki,
  race,
  gender,
  description,
 } = req.body;
 
    //Validar en cada uno que no este vacio.
if (name === undefined) return res.status(400).json({message: "no debe estar vacio"});
if (ki === undefined) return res.status(400).json({message: "no debe estar vacio"});
if (race === undefined) return res.status(400).json({message: "no debe estar vacio"});
if (gender === undefined) return res.status(400).json({message: "no debe estar vacio"});
if (description === undefined) return res.status(400).json({message: "no debe estar vacio"});

//Crear personaje
    const personajes = await personajesDb.create(req.body);
    res.status(201).json(personajes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Obteniendo todos los personajes.
export const getAllPersonajes = async (req, res) => {
  try {
    const personajes = await personajesDb.findAll();
    res.json(personajes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPersonajesById = async (res, req) => {
  try {
    const personajes = await personajesDb.findByPk(req.params.id);
    if (personajes) res.json(personajes);
    else res.status(404).json({ message: "personaje no encontrado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updatePersonajes = async (req, res) => {
  try {
    const [updated] = await personajesDb.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatePersonajes = await personajesDb.findByPk(req.params.id);
      res.json(updatePersonajes);
    } else {
      res.status(404).json({ message: "Personaje no encontrado" });
    }
  } catch (err) {
    res.satus(500).json({ error: err.message });
  }
};

export const deletePersonajes = async (req, res) => {
  try {
    const deleted = await personajesDb.destroy({
      where: { id: req.params.id },
    });
    if (deleted) res.json({ message: "personaje eliminado" });
    else res.satatus(404).json({ message: "personaje no encontrado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
