const { Router } = require('express');
const { UserController } = require('../controllers/users.controller');

const router = Router();

router.get('/users', UserController.getUser);
router.get('/users/:id', UserController.getUserId);
router.post('/users', UserController.createUser);
router.delete('/users/:id',UserController.deleteUser);
router.patch('users/:id', UserController.patchUser);
router.patch('users/save/:id',UserController.patchUserSaves);

module.exports = router;