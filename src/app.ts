import Fastify from "fastify";
import routes from "./routes";
import type { FastifyInstance } from "fastify";

const app: FastifyInstance = Fastify({
        
  logger: true,
});

app.register(routes, { prefix: "/api" });

export default app;

// exemplo de como ira ficar, quando alguem acessar minha aplicação: localhost: 3001 / api / categories;
