const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});
// 라이브러리가 서버 만들려면 이렇게 쓰라고 해놨을 뿐 이해하고 사용할 필요없이 기본 셋팅이라고 알아두면 된다.

// listen(서버 띄울 포트번호, 띄운 후 실행할 코드)

app.get('/pet', function(req, res){
    res.send("펫용품 페이지입니다.");
})
// app.get('경로', 함수(요청, 응답))

app.get('/beauty', function(req, res){
    res.send("뷰티용품 페이지입니다.");
})

// npm install -g nodemon 
// -g는 컴퓨터 내 모든 폴더에서 쓸 수 있게 설치해달라는 것.
// nodemon은 서버 재실행을 자동화해주는 라이브러리
// nodemon server.js로 nodemon 실행
// 이제부턴 코드를 수정하면 서버가 재실행됨

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.get('/write', function(req, res){
    res.sendFile(__dirname + '/write.html');
})