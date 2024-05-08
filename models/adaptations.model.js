import mongoose from "mongoose";

const adaptationsSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "El título es obligatorio"],
    },
    description: {
      type: String,
      required: [true, "La descripción es obligatoria"],
    },
    type: {
      type: String,
      required: [true, "El tipo de adaptación es obligatorio: anime o animated_movie"],
      enum: ['anime', 'animated_movie']
    },
    episodes: {
      type: Number,
      required: function() { return this.type === 'anime'; }, //solo requerido si el tipo es anime
    },
    release_year: {
      type: Number,
      required: false,
    },
    end_year: {
      type: Number,
      required: false,
    },
    active: {
      type: Boolean,
      required: [true, "Es necesario especificar si está activo o no"],
    }
  });

export default mongoose.model("adaptations", adaptationsSchema);
