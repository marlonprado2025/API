import type {FastifyReply, FastifyRequest } from "fastify";
import prisma from "../config/prisma";



export const getCategories = async (
   
    request:FastifyRequest,
    reply:FastifyReply): Promise<void> =>{

        try {
            const categories = await prisma.category.findMany({
                orderBy:{name:"asc"}
            });
            reply.send(categories);
        }
        catch (error) {
           request.log.error('Erro ao buscar categorias:', error);// Registra o erro no log do Fastify, permitindo que você veja o erro no console do servidor
           reply.status(500).send({ message: 'Erro ao buscar categorias' });// Retorna uma resposta de erro e uma mensagem de erro, permitindo que o cliente(FrontEnd) saiba que ocorreu um erro no servidor
        }
    };