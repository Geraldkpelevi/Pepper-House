const { connectToMongodb } = require("../model/dataBase");
function signin(req, res) {
  const user = req.body;

  const dbRef = connectToMongodb("FoodApp");
  const collectionRef = dbRef.collection("users");

  collectionRef
    .findOne({ username: user.username })
    .then((existingUser) => {
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }

      if (existingUser.password === user.password) {
        return res.status(200).json({ message: "User signed in successfully" });
      }

      return res.status(401).json({ message: "Invalid user password" });
    })
    .catch((err) => {
      console.error("Error signing in:", err);
      res.status(500).json({ message: "Internal server error" });
    });
}

function signUp(req, res) {
  const newUserData = req.body;

  const dbRef = connectToMongodb("FoodApp");
  const collectionRef = dbRef.collection("users");

  collectionRef
    .insertOne(newUserData)
    .then((resp) => {
      console.log("User signed up successfully:", resp);

      return res.status(200).json({
        ok: true,
        message: "User created successfully",
      });
    })
    .catch((err) => {
      console.error("Error signing up:", err);

      return res.status(500).json({
        ok: false,
        message: "Internal server error",
      });
    });
}

function getUsers(req, res) {
  const db = connectToMongodb("FoodApp");
  const collectionRef = db.collection("users");

  collectionRef
    .find({})
    .toArray()
    .then((data) => {
      console.log(data);
      res.json({ ok: true, statusCode: 200, data: data });
    })
    .catch((err) => {
      console.error("Error retrieving users:", err);
      res.status(500).json({ error: "Internal server error" });
    });
}

module.exports = {
  getUsers,
  signUp,
  signin,
};
