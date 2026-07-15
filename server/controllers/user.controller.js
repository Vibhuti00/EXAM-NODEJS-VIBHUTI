const UserController = async (req, res) => {
    try
    {
        const user = await User.find();
        res.status(200).json({ data: user });
        
    }
    catch(error)
    {
        res.status(500).json({ message: 'Internal server error' });
    }
}
