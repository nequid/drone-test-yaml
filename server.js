const express = require("express");
const bodyParser = require("body-parser");
const httpSignature = require("http-signature");

const app = express();

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("Get request fired");
  res.send({ status: "ok v11" });
});

app.post("/", (req, res) => {
  console.log("Post request fired");
  console.log("Headers", req.headers);

  const parsed = httpSignature.parseRequest(req);

  console.log('parsed', parsed)


  console.log("parsed", parsed);

  switch (req.body.repo.slug) {
    case "nequid/drone-testt":
      return res.status(200).send({ status: "ok v11" });
    default:
      return res.status(204).status({ message: "not found" });
  }
});

app.listen(4000, () => {
  console.log("Server is listening on 4000");
});
