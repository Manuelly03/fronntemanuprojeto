export function MovieCard({ title, image, rating, description }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card hover:border-border transition-colors duration-200">
      <div className="relative h-52 overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {rating && (
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-sm">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-white text-xs font-medium">{rating}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1.5 p-4">
        <h2 className="font-semibold text-base leading-tight line-clamp-1">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}