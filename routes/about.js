'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/about', async function (request, reply) {
    return reply.viewAsync('routes/about.mustache', { name: 'about' })
  })
  fastify.post('/about', async function (request, reply) {
    const formData = request.body
    console.log(`formBody: ${JSON.stringify(formData)}`)
    return reply.viewAsync('routes/about.mustache', { name: 'about' })
  })
}
