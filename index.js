import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify({ logger: true });

fastify.register(fastifyStatic, {
  root: path.join(__dirname, "public"),
});

fastify.get("/", async (req, reply) => {
  return reply.sendFile("views/index.html"); // served from /public
});

try {
  await fastify.listen({ port: 3000 });
  console.log("Server running at http://localhost:3000");
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
