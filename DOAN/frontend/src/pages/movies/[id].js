// src/pages/movies/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return; // Chờ cho đến khi có ID phim
    // Lấy thông tin chi tiết phim từ API
    fetch(`/api/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error("Error fetching movie details:", err));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <div className="flex">
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="w-80 h-[400px] object-cover mr-8"
        />
        <div>
          <p className="text-xl font-semibold mb-4">{movie.description}</p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Ngày phát hành:</strong> {movie.releaseDate}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Thể loại:</strong> {movie.genre}
          </p>
        </div>
      </div>
    </div>
  );
}
