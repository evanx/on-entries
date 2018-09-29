module.exports = (emitter, handlers) =>
   Object.entries(handlers).forEach(entry => emitter.on(...entry))
