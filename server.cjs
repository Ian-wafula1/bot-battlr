const jsonServer = require('json-server');
const express = require('express');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const path = require('path');
const port = process.env.PORT || 5173;

server.use(express.static(path.join(__dirname, 'dist')));
server.use(middlewares)
server.use('/api', router)
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
    console.log(`Server is running on http://localhost:${port}`);
})