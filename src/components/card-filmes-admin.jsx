import { Pencil, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function CardFilmeAdmin({
  filme,
  confirmDelete,
  onEdit,
  onDelete,
  onRequestDelete,
  onCancelDelete,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{filme.title}</CardTitle>
        <CardDescription>{filme.genre}</CardDescription>
      </CardHeader>

      <CardContent className="text-sm text-muted-foreground flex flex-col gap-2">
        <img
          src={filme.image}
          alt={filme.title}
          className="w-full h-40 object-cover rounded-md"
        />

        <p>{filme.description}</p>

        <span className="text-xs">
          Criado em: {new Date(filme.createdAt).toLocaleDateString("pt-BR")}
        </span>
      </CardContent>

      <CardFooter className="flex gap-2">
        {confirmDelete === filme.id ? (
          <>
            <span className="text-sm text-destructive flex-1">
              Confirmar exclusão?
            </span>

            <Button
              size="sm"
              variant="destructive"
              onClick={() => onDelete(filme.id)}
            >
              Sim
            </Button>

            <Button size="sm" variant="outline" onClick={onCancelDelete}>
              Não
            </Button>
          </>
        ) : (
          <>
            <Button size="sm" variant="outline" onClick={() => onEdit(filme)}>
              <Pencil className="size-3.5 mr-1" /> Editar
            </Button>

            <Button
              size="sm"
              variant="destructive"
              onClick={() => onRequestDelete(filme.id)}
            >
              <Trash2 className="size-3.5 mr-1" /> Excluir
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}