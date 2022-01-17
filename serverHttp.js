
let {createServer} = require('http')

const  server = createServer((req,res)=>{
  res.statusCode = 200

  res.setHeader('Content-Type','text/html')

  res.end('<h1>hello,world!</h1>')
})

server.listen(4399,()=>{
  console.log('http://localhost:4399')
})