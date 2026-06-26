import { Button } from "./ui/button";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";

export default function FilmeForm({
  editing,
  sheetOpen,
  setSheetOpen,
  form,
  setForm,
  error,
  saving,
  handleSubmit,
}) {
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{editing ? "Editar Filme" : "Novo Filme"}</SheetTitle>
          <SheetDescription>
            {editing
              ? "Altere os dados do filme."
              : "Preencha os dados para cadastrar um novo filme."}
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 px-4">
          <FieldGroup>
            {error && <p className="text-sm text-destructive">{error}</p>}

            {/* TÍTULO */}
            <Field>
              <FieldLabel htmlFor="filme-title">Título</FieldLabel>
              <Input
                id="filme-title"
                placeholder="Ex: Vingadores"
                required
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />
            </Field>

            {/* GÊNERO */}
            <Field>
              <FieldLabel htmlFor="filme-genre">Gênero</FieldLabel>
              <Input
                id="filme-genre"
                placeholder="Ex: Ação"
                required
                value={form.genre}
                onChange={(e) =>
                  setForm({ ...form, genre: e.target.value })
                }
              />
            </Field>

            {/* IMAGEM */}
            <Field>
              <FieldLabel htmlFor="filme-image">URL da Imagem</FieldLabel>
              <Input
                id="filme-image"
                placeholder="https://..."
                required
                value={form.image}
                onChange={(e) =>
                  setForm({ ...form, image: e.target.value })
                }
              />
            </Field>

            {/* DESCRIÇÃO */}
            <Field>
              <FieldLabel htmlFor="filme-description">Descrição</FieldLabel>
              <Input
                id="filme-description"
                placeholder="Descrição do filme..."
                required
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </Field>

            <Field className="mt-4">
              <Button type="submit" disabled={saving}>
                {saving
                  ? "Salvando..."
                  : editing
                  ? "Salvar Alterações"
                  : "Criar Filme"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </SheetContent>
    </Sheet>
  );
}