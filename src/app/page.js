import { genres } from "@/data/movies";
import { MovieCard } from "@/components/ui/movie-card";

export default function Home() {
  return (
    <div className="flex gap-10 p-6 overflow-x-auto">
      {Object.entries(genres).map(([genre, movies]) => (
        
        <div key={genre} className="min-w-[300px]">
          
          <h1 className="text-2xl font-bold mb-4 capitalize">
            {genre}
          </h1>

          <div className="flex flex-col gap-6">
            {movies.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </div>

        </div>

      ))}
    </div>
  );
}