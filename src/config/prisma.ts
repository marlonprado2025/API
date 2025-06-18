
import { PrismaClient } from "@prisma/client"; // Importa o PrismaClient da biblioteca do Prisma


const prisma = new PrismaClient();// Cria uma nova instância do PrismaClient, que será usada para interagir com o banco de dados

export const prismaConnect = async () => {
  
  try {
    await prisma.$connect();// Tenta se conectar ao banco de dados
    console.log("✅ Database conectado com sucesso");// Se a conexão for bem-sucedida, imprime uma mensagem de sucesso no console
  
  } catch (err) {
    console.error("❌ Erro ao conectar com o banco de dados");// Imprime uma mensagem de erro no console
  }
};

export default prisma;// Exporta a instância do PrismaClient para que possa ser usada em outras partes do código
