import User from '../../models/User'
import connectToMongoDB from '../../middlewares/connectToMongoDB'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        await newUser.save()

        return res.status(201).json({ message: "Signed up successfully" });
    } else {
        return res.status(405).json({ error: "Method Not Allowed", allow: ['POST'] });
    }
}

export default connectToMongoDB(handler)