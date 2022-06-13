const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const mongoDb = require("../config/mongodbClient");
const config = require("../config/config");
const router = express.Router();

router.post("/test", async (req, res) => {
  console.log(req.body);
  // const { name, password, email } = req.body;
  try {
    // await mongoDb.connectionDB();
    // const collection = await mongoDb.getCollection();

    // const userExist = await collection.findOne({ email: email });

    // if (userExist) {
    //   const error = new Error("User exists");
    //   error.status = 404;
    //   throw error;
    // }

    // const encryptPass = async () => {
    //   return bcrypt.hash("1234", 8);
    // };

    // const passEncrypt = await encryptPass();
    // console.log(passEncrypt);

    // const comparePass = async (password, encryptPass) => {
    //   return await bcrypt.compare(password, encryptPass);
    // };

    // console.log(await comparePass("1234", passEncrypt));

    // const payload = {
    //   name: name,
    //   passowrd: await encryptPass(),
    //   email: email,
    // };

    // const result = await collection.insertOne(payload);

    // if (!result) {
    //   const error = new Error("User not created");
    //   error.status = 404;
    //   throw error;
    // }

    const signToken = async () => {
      return jwt.sign({ name: "test" }, "secret", {
        expiresIn: 1,
      });
    };

    const token = "";

    console.log(token);

    const verifyPass = async (token) => {
      return jwt.verify(token, "biblioteca_virtual");
    };

    const verify = await verifyPass(token);

    console.log("verify", verify, token);

    // const verifyToken = () => {
    //   return jwt.verify(token, "secret", (err, decoded) => {
    //     if (err) throw "Unauthorized";

    //     console.log(decoded);
    //   });
    // };

    // console.log(verifyToken());
    res.json({ token: token });
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
