const express = require('express');
const app = express();



app.use(express.urlencoded({extended: true})) 
// 라이브러리가 서버 만들려면 이렇게 쓰라고 해놨을 뿐 이해하고 사용할 필요없다. 기본 셋팅이라고 알아두면 된다.

// listen(서버 띄울 포트번호, 띄운 후 실행할 코드)

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://admin:<qwer1234>@cluster0.ejuky.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function(에러, client){
    app.listen(8080, function(){
        console.log('listening on 8080')
    });
})

//mongoDB 연결


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

// listen이나 get 함수는 함수안에 함수를 파라미터로 넣은 콜백함수이다.
// req, res는 내가 정한 파라미터의 이름인데 첫번째는 요청내용을 담을 것이고, 두번째는 응답할 방법을 담을 것이다.

app.post('/add', function(요청, 응답){
    응답.send('전송완료');
    console.log(요청.body)
})

// 요청이라는 파라미터에 있는 걸 꺼내 쓰려면 body-parser라는 라이브러리를 사용해야 한다.
//app.use(express.urlencoded({extended: true}))  이 코드를 위에 추가 해주면 사용할 수 있다.

