const UserRoute = async (res, req) => {
    try
    {   
        res.status(200).json({ message: 'User route is working.' });
        const user = await User.find();
        res.status(200).json({ data: user });
        bodyparser.json({ message: 'User data retrieved successfully.' });
    }
    catch(error)
    {
        res.status(500).json({ message: 'Internal server error.' });
    }

}

