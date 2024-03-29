const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) =>{
    res.send('hello from index route');
});

app.get('/protected', (req, res) => {
    res.send('hello from protected route');
});

app.listen(4000, () => console.log('server on port 4000'));