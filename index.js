const express = require('express');

const PORT = 5000;
const server = express();

server.use('/api/v1/saludo', (req, res) => {
    res.send('Hola amigos')
})

server.use('/api/v1/songoku', (req, res) => {
    res.send('Hola songoku')
})

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
