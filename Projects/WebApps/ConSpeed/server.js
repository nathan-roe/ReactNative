const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./server/routes/download.routes')(app);
const port = 8000;
const server = app.listen(port, () => console.log(`Listening at port: ${port}`));
const io = require("socket.io")(server);
io.on("connection", socket => {
    console.log(socket.id);
    socket.on("client", data => {
        socket.emit("server", data);
    });
});