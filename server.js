const express = require('express')

const app = express()
const PORT = 3000
app.use(express.static(__dirname + '/dist'))
app.use(express.static(__dirname))

app.listen(PORT, function() {
  console.log(`Мой сервер на порт номер: ${PORT}`, __dirname)


})



