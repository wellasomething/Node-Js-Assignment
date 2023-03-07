const url = require("url");
const http = require("http");

http.createServer(function (req, res) {
    var _url = url.parse("https://www.gtbank.com/new?acc=12122565536;bal=2000000000");
    var protocol = _url.protocol;
    var hostname = _url.hostname;
    var host = _url.host;
    var path = _url.path;
    var search = _url.search;

    res.end(
        `Hello World\n The GTBank protocol name = ${protocol} \n
    The GtBank host name = ${hostname} and the host = ${host}  while the path is ${path} \n
    The GTBank query string = ${search}`);
  }).listen(8000);
