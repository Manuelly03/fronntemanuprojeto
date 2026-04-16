"use client";

import { useState } from "react";

export function MovieCard({ title, image, rating, description }) {
  const [comentario, setComentario] = useState("");

  const enviarComentario = () => {
    if (!comentario) return;
    alert("Comentário enviado: " + comentario);
    setComentario("");
  };

  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px"
        }}
      />

      <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
        {title}
      </h2>

      <p style={{ color: "#eab308" }}>⭐ {rating}</p>

      <p style={{ fontSize: "14px", color: "#555", marginBottom: "10px" }}>
        {description}
      </p>

      {/* INPUT ROSA */}
      <input
        type="text"
        placeholder="Digite sua opinião..."
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        style={{
          border: "2px solid #ec4899",
          borderRadius: "8px",
          padding: "8px",
          width: "100%",
          marginBottom: "8px"
        }}
      />

      {/* BOTÃO ROSA */}
      <button
        onClick={enviarComentario}
        style={{
          backgroundColor: "#ec4899",
          color: "white",
          padding: "10px",
          borderRadius: "8px",
          width: "100%",
          border: "none",
          cursor: "pointer"
        }}
      >
        Enviar
      </button>
    </div>
  );
}