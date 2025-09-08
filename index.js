// Main module for optic-test
export function getVersion() {
  console.log('adds logging')

  return '1.0.2'
}

export function getMessage() {
  return 'Hello from optic-test release branch! test 2'
}

export default {
  getVersion,
  getMessage
}
