const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-kopdi.mongodb.net/aircnc?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3333);

// req.query = Acessar query params (para filtros)
// req.params = Acessar routes params (para edição, deleção)
// req.body = Acessar corpo da requisição (para criação e edição)

/*
app.get("/", (req, res) => {
  return res.json({ message: "Hello World 2" });
});

app.get("/users/", (req, res) => {
  return res.json({ idade: req.query.idade });
});

app.post("/", (req, res) => {
  return res.json(req.body);
});

app.put("/users/:id", (req, res) => {
  return res.json({ id: req.params.id });
});
*/
