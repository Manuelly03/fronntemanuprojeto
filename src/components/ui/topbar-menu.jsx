"use client";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function TopbarMenu() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 flex items-center gap-9 h-20">
      <h1 className="text-5xl font-extrabold">
        <Link href="/"> Anotando Filmes</Link>
      </h1>

      <nav className="flex justify-between items-center w-full">
        <div className="hidden sm:flex gap-6 text-sm">
          <Link href="/informations"> Informações </Link>
          <Link href="/about"> Saiba Mais</Link>
        </div>

        <div className="flex gap-7.5">
          <Link
            className="flex items-center border px-2.5 rounded-md text-sm"
            href="/login"
          >
            Login
          </Link>

          <Link
            className="flex items-center bg-primary text-primary-foreground px-2.5 rounded-md text-sm"
            href="/register"
          >
            Cadastre-se
          </Link>

          <button onClick={handleToggleTheme}>
            {isDark ? <Sun /> : <Moon />}
          </button>
        </div>
      </nav>
    </header>
  );
}