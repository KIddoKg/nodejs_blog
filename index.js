const express = require('express')
const app = express()
const port = 3000
// "/" mean route
app.get('/helu', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})