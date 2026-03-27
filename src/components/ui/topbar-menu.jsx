import Link from "next/link";
import { Button } from "./button";

export function TopbarMenu() {
    return (
        <header className="flex items-center gap-9 h-20 w-260 m-auto" >
           <Link href="/">
            <h1 className="text-5xl font-extrabold">Notas</h1>
            </Link>
            <nav className="flex justify-between items-center w-full">

           <div className="flex gap-6 text-sm">

    
          
            <Link href="/resources">Informações</Link>
              <Link href="/Plans">Saiba Mais</Link>
           </div>

           <div className="flex gap-7.5">
            <Link href="login">
            <Button variant="outline">Login</Button>
            </Link>

            <Link href="cadastro">
             <Button>Cadastre-se</Button>
             </Link>


           </div>
            </nav>
        </header>
    )
} 