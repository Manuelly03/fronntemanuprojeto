import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CardFilme({ filme }) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-2xl border border-border/60 shadow-none hover:border-border transition-colors duration-200">
      <div className="relative h-44 w-full overflow-hidden bg-muted">
        <img
          src={filme.image}
          alt={filme.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-3">
          <span className="inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
            {filme.genre}
          </span>
        </div>
      </div>

      <CardHeader className="pb-1 pt-3 px-4">
        <h3 className="font-semibold text-base leading-tight line-clamp-1">{filme.title}</h3>
      </CardHeader>

      <CardContent className="px-4 pb-2 flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">{filme.description}</p>
      </CardContent>

      <CardFooter className="px-4 pb-4 pt-2">
        <Button asChild className="w-full">
          <Link href={`/filmes/${filme.id}`}>Ver detalhes</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}