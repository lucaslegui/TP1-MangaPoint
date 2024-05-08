import mangasModel from "../models/mangas.model.js";

//function obtener todos los mangas
async function getMangas() {
  let mangas = await mangasModel.find();
  return mangas;
}

//funcion obtener mangas por titulo
async function getManga(title) {
  try {
    return await mangasModel.findOne({ title: new RegExp(`^${title}$`, "i") }); //despreciar las mayúsculas
  } catch (error) {
    throw error;
  }
}

//funcion obtener mangas por genero
async function getMangaByGenre(genre) {
  try {
    return await mangasModel.find({ genre: new RegExp(`^${genre}$`, "i") }); //despreciar las mayúsculas
  } catch (error) {
    throw error;
  }
}

//funcion mostrar mangas finalizados
async function getFinishedMangas() {
  try {
    return await mangasModel.find({ finished: true });
  } catch (error) {
    throw error;
  }
}

//function crear manga
async function createManga(body) {
  try {
    const manga = new mangasModel({
      title: body.title,
      genre: body.genre,
      description: body.description,
    });
    return await manga.save();
  } catch (error) {
    throw error;
  }
}

//funcion actualizar manga por titulo
async function updateManga(title, body) {
  try {
    return await mangasModel.findOneAndUpdate(
      { title: new RegExp(`^${title}$`, "i") },{
        $set: {
            genre: body.genre,
            description: body.description
        }
      }
      
    );
  } catch (error) {
    throw error;
  }
}

//funcion eliminar manga por id
async function deleteManga(id) {
  try {
    return await mangasModel.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
}

export {
  getMangas,
  createManga,
  updateManga,
  getManga,
  getMangaByGenre,
  getFinishedMangas,
  deleteManga
};
