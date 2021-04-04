const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
const envFound = dotenv.config();

app.use(cors());

const port = 3000;
let auth = "no secret key";
if (envFound) {
  auth = process.env.SECRET_KEY;
}

console.log(
  auth,
  "hello world $$$$$$$$$$$$$$$$$$$$$$$$############################$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
);

const data = [];

axios({
  url: "https://api.igdb.com/v4/covers",
  method: "POST",
  headers: {
    "Client-ID": "gillmyg4he2iqgf9dxmlpn97f7em22",
    Authorization: `${auth}`,
  },
  data: "fields game,height,image_id,url,width; limit 10;",
})
  .then((res) => {
    console.log(res.data);
    data.push(res.data);
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`server on port: ${port}`);
});
