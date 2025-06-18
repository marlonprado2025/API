import type { FastifyInstance } from "fastify";
import categoryRoutes from "./category.routes";

async function routes(fastify: FastifyInstance): Promise<void> {
  fastify.get("/health", async () => {
    return {
      status: "OK",
      message: "DevBIlls API rodando normalmente",
    };
  });

  fastify.register(categoryRoutes, { prefix: "/categories" });
}
export default routes;
