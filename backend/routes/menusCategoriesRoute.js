

const {Router} = require('express');
const route = Router();
const {getAllMenusCategories, createMenusCategory} = require("../controllers/menusCategoriesController");

route.get("/getAllMenusCategories", getAllMenusCategories);
route.post("/createMenusCategory", createMenusCategory);

module.exports = route;