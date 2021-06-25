const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const dataBase = require("./dataBase");
const table = dataBase.table;
app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
  console.log("get");
  sendTable().then((responce) => {
    res.send(responce);
  });
});

app.post("/push", (req, res) => {
  console.log("post");
  //   console.log(req.body);
  pushIntoTable(req.body);
  res.send("ok");
});
app.post("/clear", (req, res) => {
  console.log("post");
  clearTable();
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`server has been started on port ${PORT}...`);
});

function sendTable() {
  return table.findAll().then((res) => {
    let itemsArray = { items: [] };
    res.forEach((element) => {
      itemsArray.items.push(element.dataValues);
    });
    return itemsArray;
  });
}

function pushIntoTable(req) {
  console.log(req);
  table.create({
    item: req.item,
  });
}
function clearTable() {
  table.destroy({
    where: {},
    truncate: true,
  });
}
