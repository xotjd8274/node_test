var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

http.createServer(function (request, response){
    if(request.method == 'GET'){
        fs.readFile('./html/login.html', function (error, data){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
    } else if(request.method == 'POST'){
        request.on('data', function(data) { // .on : 어떤 이벤트가 발생했을 때 사용하는 메소드 (~할 때)
            // response.writeHead(200, {'Content-Type': 'text/html'});
            // response.end('<h1>' + data + '</h1>');


            var text = "";
            text += data;
            var parsedStr = querystring.parse(text, '&', '=');

            console.log(parsedStr.id);
            console.log(parsedStr.pwd);

            if (parsedStr.id == parsedStr.pwd){
                response.writeHead(302, {'Location': 'https://cs.dongduk.ac.kr'});
                response.end();
            } else{
                fs.readFile('./html/login_failed.html', function(error, data){
                        response.writeHead(200, {'Content-Type': 'text/html'});
                        response.end(data);
                 });
            }
            
        });
    }

}).listen(1234, function(){
    console.log('Server running at http://127.0.0.1:1234');
});

// 기본적으로는 GET 방식을 씀
// 쓰기 CREATE - 웹에 데이터를 전송해서 기록, POST 방식
// 읽기 READ - GET 방식
// 수정 UPDATE - PUT
// 삭제 DELETE - DEL