# on-entries

## Example usage 

```javascript
require('on-entries)(server, {
  error(err) {
    console.error(err)
  },
  end() {
    console.log('ended')
  }
})
```

## Implementation 

```javascript
module.exports = (emitter, handlers) => {
  Object.entries(handlers).forEach(entry => emitter.on(...entry)
}
```
