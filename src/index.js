require('dotenv').config()
const express = require('express')
const app = express()

// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/Sanskar', (req, res) => {
  res.send('Hello Sanskar!')
})
app.get('/Kapil', (req, res) => {
  res.send('Hello Kapil!')
})
app.get('/SJ', (req, res) => {
  res.send('Hello SJ!')
})
app.get('/RJ', (req, res) => {
  res.send('Hello RJ!')
})
app.get('/Indore', (req, res) => {
  res.send('Hello Indore, my love!')
})

app.listen(process.env.PORT || 3001, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})