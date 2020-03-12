const fs = require('fs')
const path = require('path')
const express = require("express");
const bodyParser = require("body-parser");
const httpSignature = require("http-signature");

const app = express();

app.use(bodyParser.json());

app.post("/", (req, res) => {
  const parsed = httpSignature.parseRequest(req);

  if (!httpSignature.verifyHMAC(parsed, "simple")) {
    //return res.status(401).send("Authorization failed");
  }

  switch (req.body.repo.slug) {
    case "nequid/drone-test":
      let droneContent = fs.readFileSync(path.resolve('.drone.yml', 'utf8')
      console.log("Success");
      console.log('Content')
      console.log(droneContent)
      return res.status(200).send({ status: "ok v11" , data: droneContent});
    default:
      console.log("Not Found");
      return res.status(204).status({ message: "not found" });
  }
});

app.listen(4000, () => {
  console.log("Server is listening on 4000");
});
