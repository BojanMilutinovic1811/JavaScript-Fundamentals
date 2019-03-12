const chance = percentage => {
  if (Math.ceil(Math.random() * 100) < percentage) {
    return true
  } else {
    return false
  }
}

module.exports = chance
