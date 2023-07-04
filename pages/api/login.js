import User from '../../models/User'
import connectToMongoDB from '../../middlewares/connectToMongoDB'
import CryptoJS from 'crypto-js'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            var bytes = CryptoJS.AES.decrypt(user.password, 'secret123');
            var decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
            if (req.body.email == user.email && req.body.password == decryptedPassword) {
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