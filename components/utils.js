function getRandom(max) {
   const result = Math.floor(Math.random() * (max - 1 + 1)) + 1
   return result
}


export {
  getRandom
}

