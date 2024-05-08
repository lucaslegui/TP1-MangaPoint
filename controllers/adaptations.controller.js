import adaptationsModel from "../models/adaptations.model.js";

//function obtener todas las adaptaciones (activas)
async function getAdaptations() {
  let adaptationsActives = await adaptationsModel.find({ active: true });
  return adaptationsActives;
}

//funcion obtener adaptacion por id
async function getAdaptationById(id) {
  try {
    const adaptation = await adaptationsModel.findById(id);
    return adaptation;
  } catch (error) {
    throw error;
  }
}

//funcion crear adaptaciones
async function createAdaptation(req) {
  try {
    const adaptation = new adaptationsModel({
      title: req.body.title,
      description: req.body.description,
      type: req.body.type,
      episodes: req.body.episodes,
      release_year: req.body.release_year,
      end_year: req.body.end_year,
      active: true, //por default
    });
    return await adaptation.save();
  } catch (error) {
    throw error;
  }
}

//funcion actualizar adaptacion
async function updateAdaptation(id, body) {
  try {
    const adaptationUpdate = await adaptationsModel.findByIdAndUpdate(
      id,
      {
        $set: {
          title: body.title,
          description: body.description
        },
      },
      { new: true }
    );
    return adaptationUpdate;
  } catch (error) {
    throw error;
  }
}

//funcion borrar adaptacion
async function deleteAdaptation(id) {
  try {
    const adaptationDelete = await adaptationsModel.findByIdAndUpdate(id, {
      $set: {
        active: false,
      },
    });
    return adaptationDelete;
  } catch (error) {
    throw error;
  }
}

export {
  getAdaptations,
  createAdaptation,
  updateAdaptation,
  getAdaptationById,
  deleteAdaptation,
};
