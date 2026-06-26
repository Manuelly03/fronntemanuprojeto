"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from "lucide-react";
import CardFilmeAdmin from "@/components/card-filme-admin";
import FilmeForm from "@/components/filme-form";

const API = "http://localhost:5500/api/filmes";

export default function FilmesAdmin() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    title: "",
    genre: "",
    image: "",
    description: "",
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null);

  useEffect(() => {
    fetchFilmes();
  }, []);

  async function fetchFilmes() {
    setLoading(true);
    const res = await fetch(API);
    const data = await res.json();
    setFilmes(data);
    setLoading(false);
  }

  function openCreate() {
    setEditing(null);
    setForm({
      title: "",
      genre: "",
      image: "",
      description: "",
    });
    setError("");
    setSheetOpen(true);
  }

  function openEdit(filme) {
    setEditing(filme);
    setForm({
      title: filme.title,
      genre: filme.genre,
      image: filme.image,
      description: filme.description,
    });
    setError("");
    setSheetOpen(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const body = {
      title: form.title,
      genre: form.genre,
      image: form.image,
      description: form.description,
    };

    const res = await fetch(editing ? `${API}/${editing.id}` : API, {
      method: editing ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    });

    setSaving(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Erro ao salvar filme.");
      return;
    }

    setSheetOpen(false);
    fetchFilmes();
  }

  async function handleDelete(id) {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    setConfirmDelete(null);
    fetchFilmes();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Filmes</h1>

        <Button onClick={openCreate}>
          <Plus className="size-4 mr-2" />
          Novo Filme
        </Button>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 rounded-xl" />
          ))}
        </div>
      ) : filmes.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          Nenhum filme cadastrado ainda.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filmes.map((filme) => (
            <CardFilmeAdmin
              key={filme.id}
              filme={filme}
              confirmDelete={confirmDelete}
              onEdit={openEdit}
              onDelete={handleDelete}
              onRequestDelete={setConfirmDelete}
              onCancelDelete={() => setConfirmDelete(null)}
            />
          ))}
        </div>
      )}

      <FilmeForm
        editing={editing}
        sheetOpen={sheetOpen}
        setSheetOpen={setSheetOpen}
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        saving={saving}
        error={error}
      />
    </div>
  );
}