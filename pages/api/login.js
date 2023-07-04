import User from '../../models/User'
import connectToMongoDB from '../../middlewares/connectToMongoDB'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            if (req.body.email == user.email && req.body.password == user.password) {
                return res.status(200).json({ success: true, message: "Logged in successfully", name: user.name, email: user.email });
            }
            return res.status(400).json({ success: false, message: "Invalid Credentials!" });
        } else {
            return res.status(400).json({ success: false, message: "No user found!" });
        }
    } else {
        return res.status(405).json({ success: false, error: "Method Not Allowed", allow: ['POST'] });
    }
}

export default connectToMongoDB(handler)