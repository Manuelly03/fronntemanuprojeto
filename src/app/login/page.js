export default function login() {
  return (
    <div className="flex items-start justify-center h-screen pt-24 ">
      <div className="flex flex-col gap-4 p-6 border rounded-lg w-80 bg-white shadow-md">

        <h1 className="text-xl font-bold text-center text-pink-600">Faça seu Login!!</h1>

        <input
          type="text"
          placeholder="Digite seu e-mail"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"/>

        <input
          type="password"
          placeholder="Digite sua senha"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"/>

        <button className="bg-pink-500 text-white p-2 rounded hover:bg-pink-600">Enviar</button>

    </div>
    </div>
  );
  }