var http = require('http'); // http라는 모듈을 갖다쓰겠다. 기본적으로 설치가 되어있는 모듈, 경로 설정 필요 없음
http.createServer(function handler(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Server Test</h1>');
    res.end('Hello world!\n');
    }).listen(1337, '127.0.0.1'); // http 서버 메소드를 만들고 사용자가 이용할 수 있게 함
    // 서버가 해야 할 일을 function에 정해서 매개변수로, 함수형 프로그램은 함수 자체를 매개변수로 집어넣을 수 있음
    // 시스템이 알아서 호출하게 하는 함수: Call Back 함수
    // Client 의 요청 (어떤 주소와 값을 요청했는지) 이 들어왔을 때만 동작하는 Event-Driven
    // response: 요청 결과 (서버에서 만들어내는 응답 정보)
console.log('Server running at http://127.0.0.1:8080');



var http = require('http');
// 1. 요청한 url을 객체로 만들기 위해 url 모듈사용
var url = require('url');
// 2. 요청한 url 중에 Query String 을 객체로 만들기 위해 querystring 모듈 사용
var querystring = require('querystring');
var server = http.createServer(function(request,response){
// 3. 콘솔화면에 로그 시작 부분을 출력
console.log('--- log start ---');
// 4. 브라우저에서 요청한 주소를 parsing 하여 객체화 후 출력
var parsedUrl = url.parse(request.url);
console.log(parsedUrl);
// 5. 객체화된 url 중에 Query String 부분만 따로 객체화 후 출력
var parsedQuery = querystring.parse(parsedUrl.query,'&','=');
console.log(parsedQuery);
// 6. 콘솔화면에 로그 종료 부분을 출력
console.log('--- log end ---');
response.writeHead(200, {'Content-Type':'text/html'});
response.end('Hello node.js!!');
});
server.listen(8080, function(){
console.log('Server is running...');
});