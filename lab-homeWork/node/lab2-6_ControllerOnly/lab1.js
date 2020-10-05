let express = require('express');
let app = express();

//GET /static -> คืนค่าเป็น “Hello World”
app.get('/static', (req, res) => {
    res.send('Hello World');
});

//GET /staticJSON -> คืนค่าเป็น JSON ของ {text:”Hello World”}
app.get('/staticJSON', (req, res) => {
    res.json({text:'Hello World'});
});

//GET /echo?text=Heyyyy -> คืนค่าเป็น string ของตัวแปร text เช่น “Heyyyy”
app.get('/echo', (req, res) => {
    const text = req.query.text;
    res.send(text);
});

//GET /plus?a=3&b=5 -> คืนค่าเป็นผลบวกของ a + b เช่น 8
app.get('/plus', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.send(String(a + b));
});

//GET /plusByJSON?jsonText={"a":3,"b":5} -> คืนค่าเป็น ผลรวมของ a+b, parsed json 
app.get('/plusByJSON', (req, res) => {
    const myJSON = req.query.jsonText;
    const myObj =  JSON.parse(myJSON);
    res.send(String(myObj.a + myObj.b));
});

//GET /plus/6/7 -> คืนค่าเป็น ผลบวกของ 6+7 ณ ที่นี้คือ 13
app.get('/plus/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.send(String(a + b));
});

//GET /checkEvenNumber/3
app.get('/checkEvenNumber/:x', (req, res) => {
    const x = Number(req.params.x);
    res.send((x % 2 === 0) ? "True" : "False");
});

app.listen(3000);