// src/pages/api/movies.js
import Movie from "../../../backend/models/movieModel.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
