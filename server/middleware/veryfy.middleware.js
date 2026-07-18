const verifyUser = (req, res, next) => {
    const userRole = req.user.role;
    if (userRole !== 'faculty') {
        return res.status(403).json({ message: 'Access denied. Only faculty users are allowed.' });
    }
    next();
};
export default verifyUser;
