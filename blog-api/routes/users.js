import express from 'express';
import userController from '../controller/userController.js';

const router = express.Router();

router.get('/users', userController.getAllUsers);
router.get('/users/:nim', userController.getUserByNIM);
router.post('/users', userController.createUser);
router.put('/users/:nim', userController.updateUserByNIM);
router.delete('/users/:nim', userController.deleteUserByNIM);

export default router;