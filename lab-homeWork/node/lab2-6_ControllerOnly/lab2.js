let express = require('express');
// let bodyParser = require('body-parser');

let app = express();
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Return the Bad input (400) response code if the input number is not even. (in this case, it is 3) thus it is return 400 response code.
// Return the Success (200) response code if the input number is a even.

app.get('/:x', (req, res) => {
    const x = Number(req.params.x);
    if (x % 2 === 0) {
        res.status(200).send();
    }
    else {
        res.status(400).send();
    } 
});

// POST /number/1 for saving a input number, return the all saved numbers as a JSON array. For example
// POST /number/1 -> [1]
// POST /number/2 -> [1,2]
// POST /number/5 -> [1,2,5]

let arr = [];

app.post('/number/:x', (req, res) => {
    const x = Number(req.params.x);
    arr.push(x);
    res.send(arr);
});

// DELETE /number/1, remove the number in the array
// DELETE /number/1 -> [2,5]
// DELETE /number/2 → [5]

app.delete('/number/:x', (req, res) => {
    const x = Number(req.params.x);
    filterArr = arr.filter((value) => value !== x);
    arr = [...filterArr];
    res.send(arr);
});

// PUT /number/5/10, change the number in the array
// PUT /number/5/10 -> [10]

app.put('/number/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const index = arr.indexOf(a);
    if(index < 0) {
        res.status(400).send('Cannot edit the array, number not found.')
    }
    else {
        arr.splice(index, 1, b);
    }
    res.send(arr);
});

// POST /countFields for counting the number of fields that submit via req.body (raw as the JSON object) for example,
// POST /countFields BODY {“a”:1,”b”:2,”c”:3} -> 3
// POST /countFields BODY {“a”:1,”b”:2,”c”:3,”d”:5} -> 4

app.post('/countFields', (req, res) => {
    res.send(String(Object.keys(req.body).length));
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});