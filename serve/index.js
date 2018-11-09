const http = require('http');
const data = {
  code: 1,
  data: ["vue","react","javascript"]
}
http.createServer((req, res) => {
  console.log(req.method + ': ' + req.url);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1')
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}).listen(5566);

console.log('Server is running at http://127.0.0.1:5566/');