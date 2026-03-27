import TopbarMenu from "../components/tobar-menu";
export default function Home() {
  return (
    <div>
      <TopbarMenu />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Bem-vindo 🚀</h1>
        <p>Essa é a página inicial do sistema</p>

        <button>Ir para Login</button>
        <button>Criar Conta</button>
      </div>
    </div>
  );
}