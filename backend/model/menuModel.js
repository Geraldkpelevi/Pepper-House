const { connectToMongodb } = require("./dataBase");

function getAllMenusData() {
  const menuCollection = connectToMongodb("FoodApp", "menusCategories");
  return menuCollection.find({}).toArray();
}

function createMenusData(newMenusCategoryData) {
  const menuCollection = connectToMongodb("FoodApp", "menusCategories");
  return menuCollection.insertOne(newMenusCategoryData);
}

module.exports = { getAllMenusData, createMenusData };
