const jwt = require('jsonwebtoken')

const secret = 'mysupersecrepass' // Procurar dejarla en una variable de entornoy en el backend

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY4MDMwMzM1OH0.WyOvaUZP8no2VWexr6TpzmxgHwhSk8nI9KdPpuHMrDU'

function verifyToken (token, secret) {
  return jwt.verify(token, secret)
}

const payload = verifyToken(token, secret)

console.log(payload)
