# on-entries

Trivial utility for setting event listeners on an emitter.

## Example usage

```javascript
require('on-entries')(emitter, {
   error(err) {
      console.error(err)
   },
   end() {
      console.log('ended')
   },
})
```

See https://github.com/evanx/on-entries/blob/master/index.js

## Implementation

See https://github.com/evanx/on-entries/blob/master/index.js

```javascript
module.exports = (emitter, handlers) =>
   Object.entries(handlers).forEach(entry => emitter.on(...entry))
```
