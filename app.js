const openpgp = require("openpgp");
const fs = require("fs");
(async () => {
  const { privateKeyArmored, publicKeyArmored } = await openpgp.generateKey({
    userIds: [{ name: "John Doe", email: "johndoe@email.com" }], // you can pass multiple user IDs
    type: "rsa", // key type ( please don't change this value )
    rsaBits: 2048, // RSA key size (please don't change this value)
    passphrase: "abcdeg", // protects the private key
  });

  fs.writeFileSync("./privatekey.asc", privateKeyArmored);
  fs.writeFileSync("./publickey.asc", publicKeyArmored);
})();
