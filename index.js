import Fastify from "fastify";
import fastifyView from '@fastify/view';
import fastifyStatic from '@fastify/static';
import ejs from 'ejs';
import path from "path";
import { fileURLToPath } from "url";

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
   reply.view('pages/index.ejs');
});

fastify.get('/recipes', (req, reply) => {
  reply.view('pages/recipes.ejs');
});

fastify.get('/posts', (req, reply) => {
  reply.view('pages/posts.ejs');
});

try {
  await fastify.listen({ port: 3000 });
  console.log("Server running at http://localhost:3000");
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
