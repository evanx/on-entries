const assert = require('assert')
const onEntries = require('../index.js')
const EventEmitter = require('events')

class ExampleEmitter extends EventEmitter {}

const emitter = new ExampleEmitter()

const state = {}

onEntries(emitter, {
   error(err) {
      state.errMessage = err.message
      console.error(err.message)
   },
   end() {
      state.ended = true
      console.log('end')
   },
})

const testError = new Error('Test Error')
emitter.emit('error', testError)
emitter.emit('end')

assert.deepEqual(state, { errMessage: testError.message, ended: true })
console.log('ok')
