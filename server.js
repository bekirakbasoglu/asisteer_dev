// Constants
const express = require('express');
const PORT = 3000;
const HOST = '0.0.0.0';


// App
const app = express();
app.get('/', (req, res) => {res.send('Hello World Everyone!!');});
app.get('/will', (req, res) => {res.send('Hello World Asisteer !!');});
app.get('/ready', (req, res) => {res.send('Hello World Ready!');});
app.get('/bekir', (req, res) => {res.send('Hello World Bekir!');});
app.get('/recep', (req, res) => {res.send('Hello World Recep!');});

app.listen(PORT, HOST, () => {console.log('Running on http://${HOST}:${PORT}');});


