require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/mensagem", (req, res) => {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
  }

  const novaMensagem = { nome, email, mensagem, data: new Date() };
  const caminho = "./mensagem.json";

  let mensagens = [];
  if (fs.existsSync(caminho)) {
    mensagens = JSON.parse(fs.readFileSync(caminho));
  }

  mensagens.push(novaMensagem);
  fs.writeFileSync(caminho, JSON.stringify(mensagens, null, 2));

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: `Nova mensagem de ${nome}`,
    text: `Você recebeu uma nova mensagem de ${nome} (${email}):\n\n${mensagem}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ erro: "Falha ao enviar o e-mail." });
    }
    console.log("E-mail enviado: " + info.response);
    return res
      .status(201)
      .json({ sucesso: "Mensagem recebida e e-mail enviado!" });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
