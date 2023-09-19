const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const fs = require('fs')

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  next()
})

const drivesData = JSON.parse(fs.readFileSync('drives.json', 'utf8'))

const groups = JSON.parse(fs.readFileSync('groups.json', 'utf8'))

const getmodel = JSON.parse(fs.readFileSync('model.json', 'utf8'))
server.get('/v2/drives', (req, res) => {
  res.jsonp(drivesData)
})
server.get('/groups', (req, res) => {
  res.jsonp(groups)
})
server.get('/chart/getmodel', (req, res) => {
  res.jsonp(getmodel)
})
server.listen(8080, () => {
  console.log('JSON Server is running')
})
