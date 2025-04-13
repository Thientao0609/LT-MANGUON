// src/pages/index.js
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Lấy danh sách phim từ API
    fetch('/api/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(err => console.error('Error fetching movies:', err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🎬 Phim nổi bật</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <Card key={movie._id} className="rounded-2xl shadow-md overflow-hidden">
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{movie.description}</p>
              <Link href={`/movies/${movie._id}`}>
                <Button className="w-full">Xem phim</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
