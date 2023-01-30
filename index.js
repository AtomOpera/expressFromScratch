const express = require('express')
const cors = require("cors") // to receive local calls from react for example
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// these are some extras
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// you could create an http server for example like this
// https://www.w3schools.com/nodejs/ref_http.asp
const server = http.createServer(app);