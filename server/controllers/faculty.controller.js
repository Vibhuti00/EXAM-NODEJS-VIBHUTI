import FacultyUser from '../models/facultyuser.model.js';
import bcrypt from 'bcryptjs';
const facultyuserController = {
  createFacultyUser: async (req, res) => {
    try {
      const { name, email, password, department } = req.body;
      const existingUser = await FacultyUser.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'Email already in use' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const facultyUser = await FacultyUser.create({
        name,
        email,
        password: hashedPassword,
        department,
      });
      res.status(201).json({ message: 'Faculty user created', facultyUser });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },
  getFacultyUserDetails: async (req, res) => {
    try {
      const userId = req.params.id;
      const facultyUser = await FacultyUser.findById(userId).select('-password');
      if (!facultyUser) {
        return res.status(404).json({ message: 'Faculty user not found' });
      }
      res.status(200).json(facultyUser);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },
  updateFacultyUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const updates = { ...req.body };
      if (updates.password) {
        updates.password = await bcrypt.hash(updates.password, 10);
      }
      const facultyUser = await FacultyUser.findByIdAndUpdate(userId, updates, {
        new: true,
        runValidators: true,
      }).select('-password');
      if (!facultyUser) {
        return res.status(404).json({ message: 'Faculty user not found' });
      }
      res.status(200).json({ message: 'Faculty user updated', facultyUser });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },
  deleteFacultyUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const facultyUser = await FacultyUser.findByIdAndDelete(userId);
      if (!facultyUser) {
        return res.status(404).json({ message: 'Faculty user not found' });
      }
      res.status(200).json({ message: 'Faculty user deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },
};
export default facultyuserController;
