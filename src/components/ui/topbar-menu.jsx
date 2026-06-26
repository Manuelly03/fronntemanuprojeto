"use client";
import Link from "next/link";
import { Sun, Moon, Film } from "lucide-react";
import { useTheme } from "next-themes";

export default function TopbarMenu() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between h-16 px-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight">
          <div className="flex items-center justify-center size-8 rounded-xl bg-foreground">
            <Film className="size-4 text-background" />
          </div>
          Anotando Filmes
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/informations" className="hover:text-foreground transition-colors">Informações</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">Saiba Mais</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm px-3.5 py-1.5 rounded-lg border border-border hover:bg-muted transition-colors"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-sm px-3.5 py-1.5 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            Cadastre-se
          </Link>
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex items-center justify-center size-8 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Alternar tema"
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}