import personajesDb from "../models/character.model.js";

//Crear, obtener personajes por id, obtener todos los personajes, actualizar y eliminar personajes.
export const createPersonajes = async (req, res) => {
  try {
    let { name, ki, race, gender, description } = req.body;

    // Validar que ninguno sea undefined o null
    if (
      name === undefined ||
      name === null ||
      ki === undefined ||
      ki === null ||
      race === undefined ||
      race === null ||
      gender === undefined ||
      gender === null ||
      description === undefined ||
      description === null
    ) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios." });
    }

    // Formatear strings (asegurarnos que sean strings y quitar espacios)
    const formatedName = String(name).trim();
    const formatedRace = String(race).trim();
    const formatedGender = String(gender).trim().toLowerCase();
    const formatedDescription = String(description).trim();

    // Validar que no estén vacíos
    if (formatedName === "" || formatedRace === "" || formatedGender === "") {
      return res
        .status(400)
        .json({ message: "Los campos no pueden estar vacíos." });
    }

    // Validar ki número entero válido
    const kiNum = Number(ki);
    if (isNaN(kiNum) || !Number.isInteger(kiNum)) {
      return res
        .status(400)
        .json({ message: "El campo 'ki' debe ser un número entero válido." });
    }

    // Validar gender sea Male o Female
    if (formatedGender !== "male" && formatedGender !== "female") {
      return res
        .status(400)
        .json({ message: "El género debe ser Male o Female'." });
    }

    //Consultar si ya existe un name en la BD.s
    const personajeExistente = await personajesDb.findOne({
      where: { name: formatedName },
    });

    if (personajeExistente) {
      return res.status(404).json({
        message: `Ya existe un personaje con este nombre ${formatedName}`,
      });
    }

    // Crear personaje usando valores formateados
    const personajes = await personajesDb.create({
      name: formatedName,
      ki: kiNum,
      race: formatedRace,
      gender: formatedGender,
      description: formatedDescription,
    });

    res.status(201).json(personajes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//-------------------------------------------------------------------------------------------------------------------//
//Obteniendo todos los personajes.
export const getAllPersonajes = async (req, res) => {
  try {
    const personajes = await personajesDb.findAll();
    res.json(personajes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//-------------------------------------------------------------------------------------------------------------------//
//Obteniendo los personajes por ID.
export const getPersonajesById = async (req, res) => {
  try {
    const personajes = await personajesDb.findByPk(req.params.id);
    if (personajes) res.json(personajes);
    else res.status(404).json({ message: "personaje no encontrado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//-------------------------------------------------------------------------------------------------------------------//
//Actualizar los personajes.
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
    res.status(500).json({ error: err.message });
  }
};

//-------------------------------------------------------------------------------------------------------------------//
//Eliminar los personajes.
export const deletePersonajes = async (req, res) => {
  try {
    const deleted = await personajesDb.destroy({
      where: { id: req.params.id },
    });
    if (deleted) res.json({ message: "personaje eliminado" });
    else res.status(404).json({ message: "personaje no encontrado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
