import { useState } from "react";
import "../styles/sections/Formulario.css";

function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [mensagemStatus, setMensagemStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagemStatus("");

    try {
      const resposta = await fetch("http://localhost:5000/api/mensagem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const resultado = await resposta.json();

      if (resposta.ok) {
        setMensagemStatus(resultado.sucesso);
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        setMensagemStatus(resultado.erro);
      }
    } catch (error) {
      setMensagemStatus("Erro ao enviar a mensagem.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="h2">Enviar Mensagem</h2>
      <form onSubmit={handleSubmit} className="custom-form">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensagem"
          placeholder="Mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      {mensagemStatus && <p className="status-message">{mensagemStatus}</p>}
    </div>
  );
}

export default Formulario;
