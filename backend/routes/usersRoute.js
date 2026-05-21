const {Router} = require('express');
const route = Router();

const {signUp, getUsers,signin} = require('../controllers/userController');

route.get('/getAllUsers', getUsers);
route.post('/signup', signUp);
route.post('/signin', signin)


module.exports = route;