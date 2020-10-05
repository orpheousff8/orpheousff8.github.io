let express = require('express');
let app = express();

// ที่เว็บ http://localhost:5555/bye
// ให้แสดงคำว่า “Good bye”
// เปลี่ยนมาทำให้รองรับ Post
// เปลี่ยนมาทำให้รองรับ Put
// เปลี่ยนมาทำให้รองรับ Delete


app.get('/bye', (req, res) => {
    res.send('GET good bye');
});

app.post('/add/:id', (req, res) => {
    const id = req.params.id;
    res.status(201).send(`POST ${id}`);     //Created. The request has been fulfilled, resulting in the creation of a new resource.
});

app.put('/edit/:id', (req, res) => {
    const id = req.params.id;
    res.send(`PUT ${id}`);
});

app.delete('/remove/:id', (req, res) => {
    const id = req.params.id;
    res.status(204).send();     //204  No Content. The server successfully processed the request, and is not returning any content.
});

app.listen(5555);