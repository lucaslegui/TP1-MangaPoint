import mongoose from "mongoose";

const mangasSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  year_of_publication: {
    type: Number,
    required: false,
  },
  finished: {
    type: Boolean,
    required: false,
  },
  last_chapter_released: {
    type: Number,
    required: false,
  },
  image_url: {
    type: String,
    required: false,
  },
});

export default mongoose.model('mangas', mangasSchema)
