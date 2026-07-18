import express from 'express';
import facultyuserController from '../controllers/facultyuser.controller.js';
const router = express.Router();
router.post('/', facultyuserController.createFacultyUser);
router.get('/:id', facultyuserController.getFacultyUserDetails);
router.put('/:id', facultyuserController.updateFacultyUser);
router.delete('/:id', facultyuserController.deleteFacultyUser);
export default router;
