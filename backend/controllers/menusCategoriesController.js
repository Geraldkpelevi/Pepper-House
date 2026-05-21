const {getAllMenusData, createMenusData} = require("../model/menuModel");

const { connectToMongodb } = require("../model/dataBase");
function getAllMenusCategories(req, res) {
  getAllMenusData()
    .then((data) => {
      console.log(data);
      res.json({ ok: true, statusCode: 200, data: data });
    })
    .catch((err) => {
      console.error("Error retrieving menusCategories:", err);
      res.status(500).json({ error: "Internal server error" });
    });
}
function createMenusCategory(req, res) {
  const newMenusCategoryData = req.body;

  createMenusData(newMenusCategoryData)
    .then((resp) => {
      console.log("MenusCategory created successfully:", resp);
      res.json({ ok: true, statusCode: 200, data: resp });
    })
    .catch((err) => {
      console.error("Error creating MenusCategory:", err);
      res.status(500).json({ error: "Internal server error" });
    });
}


module.exports = {
  getAllMenusCategories,
  createMenusCategory
};