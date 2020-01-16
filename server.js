var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

http.createServer(function (request, response){
    // fs.readFile('./html/test_res.html', function(error, data){ // 읽은 값(html 파일)이 data로 들어옴
    //     if(error){
    //         console.log(error.message);
    //     }
    //     else{
    //         response.writeHead(200, {'Content-Type': 'text/html'});
    //         response.end(data); // 파일을 찾아 읽어와서 그 파일을 데이터로 전송
    //     }
    // });

    
    // fs.readFile('./img/elsa.jpg', function(error, data) {
    //     if(error){
    //         console.log(error.message);
    //     }
    //     else{
    //         // response.writeHead(200, {'Content-Type': 'image/jpeg'});
    //         // response.end(data);

    //         response.writeHead(302, {'Location': 'https://cs.dongduk.ac.kr'});
    //         response.end();
    //     }
    // })


    // var pathName = url.parse(request.url).pathname;
    // if(pathName == '/'){
    //     fs.readFile('./html/index.html', function(error, data){
    //         response.writeHead(200, {'Content-Type': 'text/html'});
    //         response.end(data);
    //     });
    // } else if(pathName == '/second'){
    //     fs.readFile('./html/second.html', function(error, data){
    //         response.writeHead(200, {'Content-Type': 'text/html'});
    //         response.end(data);
    //     });
    // } else if(pathName == '/cs'){
    //         response.writeHead(302, {'Location': 'https://cs.dongduk.ac.kr'});
    //         response.end();
    // }
    var query = url.parse(request.url, true).query;
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>' + JSON.stringify(query) + '</h1>');

}).listen(1234, function(){
    console.log('Server running at http://127.0.0.1:1234');
});

//쓰기 CREATE - 웹에 데이터를 전송해서 기록, POST 방식
// 읽기 READ - GET 방식
// 수정 UPDATE - PUT
// 삭제 DELETE - DEL