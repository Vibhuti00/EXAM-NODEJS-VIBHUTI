import facultyuserController from '../controllers/facultyuser.controller.js';
app.use(express.json());
app.use('/api/faculty', facultyUserRoutes);
mongoose.connect(mongoUri)
                            .then(() => console.log('MongoDB connected'))
                            .catch((err) => console.error('MongoDB connection error:', err));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
router.post('/', facultyuserController.createFacultyUser);
router.get('/:id', facultyuserController.getFacultyUserDetails);
router.put('/:id', facultyuserController.updateFacultyUser);
router.delete('/:id', facultyuserController.deleteFacultyUser);
export default router;
