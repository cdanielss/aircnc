//req.query = acessar query parametros (adiciona filtros)
//req.body = acessar o corpo(criação e edição)
//req.params = acessar route parametros (edição e delete)


const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

mongoose.connect('mongodb+srv://@cluster0-0kwtw.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());
app.use('/file', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);