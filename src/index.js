import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Middleware para o Express entender JSON
app.use(express.json());

// Usar as rotas de autenticação
app.use("/api/auth", authRoutes);

// Configuração da porta do servidor
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
