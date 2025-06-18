import type { FastifyReply, FastifyRequest } from "fastify";

const createTransaction = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
  const userId = "123456"; //Fake user id, userId => request.userId

  if (!userId) {
    reply.status(401).send({ error: "Usuário não autorizado" }) 
   }
};

export default createTransaction;
