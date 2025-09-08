// Main module for optic-test
export function getVersion() {
  console.log('adds logging again v4 post branch')

  return '1.0.4'
}

export function getMessage() {
  return 'Hello from optic-test release branch! test -- v3'
}

export default {
  getVersion,
  getMessage
}
