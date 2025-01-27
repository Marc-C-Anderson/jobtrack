'use strict'

const fp = require('fastify-plugin')

/**
 * This plugins adds some utilities to handle form data
 *
 * @see https://github.com/fastify/fastify-sensible
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/formbody'))
})
