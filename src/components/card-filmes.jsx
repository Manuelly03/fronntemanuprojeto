import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CardFilme({ filme }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl">{filme.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {filme.genre}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-3 text-sm">
        <img
          src={filme.image}
          alt={filme.title}
          className="w-full h-40 object-cover rounded-md"
        />

        <p className="line-clamp-3">{filme.description}</p>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/filmes/${filme.id}`}>Ver detalhes</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}