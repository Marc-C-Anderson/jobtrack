// index.js:
const fastify = require("fastify")()
const fastifyView = require("@fastify/view")

fastify.register(fastifyView, {
  engine: {
    mustache: require("mustache")
  }
})

// synchronous handler:
fastify.get("/", (req, reply) => {
  reply.view("index.mustache", { name: "User" });
})

// // asynchronous handler:
// fastify.get("/", async (req, reply) => {
//   return reply.viewAsync("index.ejs", { name: "User" });
// })

fastify.listen({ port: 3000 }, (err) => {
  if (err) throw err;
  console.log(`server listening on ${fastify.server.address().port}`);
})
