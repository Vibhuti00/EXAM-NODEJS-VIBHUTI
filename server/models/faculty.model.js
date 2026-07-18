import mongoose from 'mongoose';

const facultyUserSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    department: { type: String, trim: true, default: 'General' },
    role: { type: String, trim: true, default: 'faculty' },
    createdAt: { type: Date, default: Date.now },
});

const FacultyUser = mongoose.model('FacultyUser', facultyUserSchema);

export default FacultyUser;

