const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('You have arrived on the NodeApp Site! Welcome!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})