const authentication = (req, res ,next ) => {
    try {
        if (!req.header.authorization)
        return res.status(403).json({ message: "forbidden"})
        const token = req.header.authorization.split(" ")
        





        next();
    }catch(error){
        res.status(403).json(error);
    }
};
