import Fastify from "fastify";
import path from "path";
import ejs from 'ejs';
import fastifyView from '@fastify/view';
import fastifyStatic from '@fastify/static';
import { fileURLToPath } from "url";
import posts from "./posts.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify({ logger: true });

fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
});

fastify.register(fastifyView, {
  engine: { ejs },
  root: path.join(__dirname, 'public', 'views'),
  layout: 'layout.ejs'
});

fastify.get('/', (req, reply) => {
   reply.view('pages/index.ejs', { posts });
});

try {
  await fastify.listen({ port: 3000 });
  console.log("Server running at http://localhost:3000");
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
