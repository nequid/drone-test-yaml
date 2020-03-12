let httpSignature = require("http-signature");

let parsed = {
  scheme: "Signature",
  params: {
    keyId: "hmac-key",
    algorithm: "hmac-sha256",
    signature: "7XZKMtiZoBcbCyu1JaR3y7IIwyQq5WlFSjDcFcjxZDc=",
    headers: ["accept", "accept-encoding", "content-type", "date", "digest"]
  },
  signingString:
    "accept: application/vnd.drone.config.v1+json\n" +
    "accept-encoding: identity\n" +
    "content-type: application/json\n" +
    "date: Thu, 12 Mar 2020 16:59:17 GMT\n" +
    "digest: SHA-256=bzzgsv/3k4Esc28BCf5Mqz/eUcCmhg3gjthkLqSCep8=",
  algorithm: "HMAC-SHA256",
  keyId: "hmac-key"
};

console.log(httpSignature.verifyHMAC(parsed,'simplee'))
