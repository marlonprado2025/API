import app from "./app";
import dotenv from "dotenv";
import { prismaConnect } from "./config/prisma";
import { initializeGlobalCategories } from "./services/globalCategories.service";

dotenv.config();

// Verifica se a variável de ambiente PORT está definida e é um número válido
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001; // 3001 como padrão

const startServer = async () => {
  try {

    await prismaConnect();
    await initializeGlobalCategories();

    await app.listen({ port: PORT });
    console.log(` ✅ Servidor rodando na porta ${PORT}`);
  } catch (err) {
    console.error(" ❌ Erro ao iniciar o servidor:", err);
  }
};

startServer();
