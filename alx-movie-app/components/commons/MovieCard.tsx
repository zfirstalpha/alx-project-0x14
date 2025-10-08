import React from "react";

interface MovieCardProps {
  title: string;
  poster: string;
  year?: string;
  onClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, poster, year, onClick }) => {
  return (
    <div onClick={onClick} className="border rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer">
      <img src={poster} alt={title} className="w-full h-64 object-cover" />
      <div className="p-2">
        <h2 className="font-bold text-lg">{title}</h2>
        {year && <p className="text-gray-500">{year}</p>}
      </div>
    </div>
  );
};

export default MovieCard;
