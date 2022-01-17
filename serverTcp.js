let {createServer}  = require('net')

let server = createServer(client=>{
  console.log('remoteAddress',client.remoteAddress)
  console.log('remotePort',client.remotePort)

  //接收客户端发送过来的数据
  client.on('data',data=>{
    console.log(data.toString());

    //获取并解析，对应返回响应
    client.write(`HTTP/1.1 200 OK\r
      Content-Type: text/html\r
      Content-Length:14\r\n
      <h1>hello,world!</h1>
    `)

     //关闭连接
     client.end()
  })

})

server.listen({
  host:'127.0.0.1',
  port:4399
},()=>{
  console.log('http://127.0.0.1:4399')
})