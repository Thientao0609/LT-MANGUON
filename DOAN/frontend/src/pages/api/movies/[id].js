// src/pages/api/movies/[id].js
import Movie from "../../../backend/models/movieModel.js";

export default async function handler(req, res) {
  const { id } = req.query;
  
  if (req.method === "GET") {
    try {
      const movie = await Movie.findById(id);
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
