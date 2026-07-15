import Faculty from "../models/Faculty";
import { createToken } from "../utils/token.js";

const loginRouter = async (req, res) => {
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        if (username === "admin" && password === "admin") {
            const token = createToken({ id: 'admin', role: 'admin' });
            return res.status(200).json({ message: 'Login Successful.', role: 'admin', token });
        }

        const faculty = await Faculty.findOne({ name: username, role: 'faculty' });
        if (!faculty) {
            return res.status(404).json({ message: 'User not found' });
        }

        faculty.comparePassword(password, (error, isMatch) => {
            if (error) {
                return res.status(500).json({ message: 'Error occurred while comparing password.' });
            }
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid password' });
            }
            const token = createToken({ id: faculty._id, role: 'faculty' });
            return res.status(200).json({ message: 'Login successful', role: 'faculty', token });
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export default loginRouter;
