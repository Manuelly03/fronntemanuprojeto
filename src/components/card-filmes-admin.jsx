import { Pencil, Trash2, Film } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
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
        <h3 className="font-semibold text-base leading-tight line-clamp-1">
          {filme.title}
        </h3>
        <p className="text-xs text-muted-foreground">
          Adicionado em {new Date(filme.createdAt).toLocaleDateString("pt-BR")}
        </p>
      </CardHeader>

      <CardContent className="px-4 pb-2 flex-1">
        <p className="text-sm text-muted-foreground line-clamp-2">{filme.description}</p>
      </CardContent>

      <CardFooter className="px-4 pb-4 pt-2 flex gap-2">
        {confirmDelete === filme.id ? (
          <div className="flex items-center gap-2 w-full">
            <span className="text-sm text-destructive flex-1 font-medium">Confirmar exclusão?</span>
            <Button size="sm" variant="destructive" onClick={() => onDelete(filme.id)}>
              Sim
            </Button>
            <Button size="sm" variant="outline" onClick={onCancelDelete}>
              Não
            </Button>
          </div>
        ) : (
          <>
            <Button size="sm" variant="outline" className="flex-1" onClick={() => onEdit(filme)}>
              <Pencil className="size-3.5 mr-1.5" /> Editar
            </Button>
            <Button size="sm" variant="destructive" className="flex-1" onClick={() => onRequestDelete(filme.id)}>
              <Trash2 className="size-3.5 mr-1.5" /> Excluir
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}