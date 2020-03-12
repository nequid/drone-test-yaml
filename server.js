const express = require("express");
const bodyParser = require("body-parser");
const httpSignature = require("http-signature");

const app = express();

app.use(bodyParser.json());

app.post("/", (req, res) => {
  const parsed = httpSignature.parseRequest(req);

  if (!httpSignature.verifyHMAC(parsed, "simplee")) {
    return res.status(401).send("Authorization failed");
  }

  switch (req.body.repo.slug) {
    case "nequid/drone-test":
      return res.status(200).send({ status: "ok v11" });
    default:
      return res.status(204).status({ message: "not found" });
  }
});

app.listen(4000, () => {
  console.log("Server is listening on 4000");
});
