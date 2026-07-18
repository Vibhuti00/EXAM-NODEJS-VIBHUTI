const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith(' ')) {
    return res.status(401).json({ message: 'Authorization header missing or invalid' });
    }
    const absant = req.headers.absant;
    if (!absant || !absant.startsWith(' ')) {
        return res.status(401).json({ message: 'Absant header missing or invalid' });
    }
    const jwt = require('jsonwebtoken');
    // const token = absant.split(' ')[1];
    // jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    //     if (err) 
    //     {
    //         return res.status(401).json({ message: 'Invalid token' });
    //     }
    //         req.user = decoded;
    //         next();
    // });
    if (pm.response.code === 200) {
    var jsonData = pm.response.json();
    environment.set("authToken", jsonData.token); 
    }
};
export default authMiddleware;

