import { genres } from "./data/movies.js";
import { MovieCard } from "@/components/ui/movie-card";

export default function Home() {
  const allGenres = Object.entries(genres);

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Filmes em destaque</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Explore filmes por gênero e encontre seu próximo favorito.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {allGenres.map(([genre, movies]) => (
          <section key={genre}>
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-lg font-semibold capitalize">{genre}</h2>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {movies.length} {movies.length === 1 ? "filme" : "filmes"}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {movies.map((movie, index) => (
                <MovieCard key={index} {...movie} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}