const http = require('http')
const micro = require('micro-dev')
const sleep = require('then-sleep')

const server = new http.Server(micro(async (req, res) => {
    await sleep(500)
    return 'Hello world'
}))

server.listen(3000)