'use strict'

const fp = require('fastify-plugin')

/**
 * This plugin adds fastify/view
 *
 * @see https://github.com/fastify/point-of-view
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/view'), {
    engine: {
      mustache: require('mustache')
    },
    options: {} // No options passed to mustache
  })
})
