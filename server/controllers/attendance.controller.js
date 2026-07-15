const FacultyController = 
{
    getAllFaculty: (req, res) => 
    {
        const data = FacultyModel.find();
        try 
        {
            res.status(200).json(data);
        }
        catch (error) 
        {
            res.status(500).json({ message: "error.message" });
        }
    },
    createFaculty: async (req, res) =>   
    {
        try 
        {   
            const error = validationResult(req);
            if (error.array().length != 0)
            {
                return res.json(error.array());
            }
            const data = await FacultyModel.create(req.body);
            const Faculty = new FacultyModel(req.body);
            res.status(201).json(Faculty);
        } 
        catch (error) 
        {
            res.status(400).json({ message: "error.message" });
        }
    },
    deleteFaculty: async (req, res) => 
    {
        try 
        {
            res.status(200).json({ message: 'Faculty deleted successfully' });
        } 
        catch (error) 
        {
            res.status(500).json({ message: "error.message" });
        }
    }
}
export default FacultyController;
