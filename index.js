
const graphql = require('graphql')
const graphqlHTTP = require('express-graphql')
const express = require('express')
const usuarios = require('./schema')
const app = express()
app.use('/teste', graphqlHTTP({schema:usuarios, pretty: true}))
app.listen(3000, function () {
  console.log('Server on.')
})