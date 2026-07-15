import { verifyToken } from "../utils/token.js";
import Faculty from "../models/Faculty";

const auth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'There is no token provided.' });
        }
        const token = authHeader.split(' ')[1];
        const decoded = verifyToken(token);
        const userId = decoded.id;
        const user = await Faculty.findById(userId);
        if (!user) {
            return res.status(401).json({ message: 'User not found.' });
        }
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token.' });
    }
}

export default auth;
