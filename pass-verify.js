const bycrypt = require('bcrypt')

async function verifyPassword () {
  const myPassword = 'admin123.202'
  const hash = '$2b$10$ADzceP5WLv/uhkPX7EMs4eF04uoGjQ/hu5wSHdIUBjEtbLZqv6eeG'
  const isMatch = await bycrypt.compare(myPassword, hash)
  console.log(isMatch)
}

verifyPassword()
