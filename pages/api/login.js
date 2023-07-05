import User from '../../models/User'
import connectToMongoDB from '../../middlewares/connectToMongoDB'
import CryptoJS from 'crypto-js'
import * as jwt from 'jsonwebtoken'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            let bytes = CryptoJS.AES.decrypt(user.password, 'secret123');
            let decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
            if (req.body.email == user.email && req.body.password == decryptedPassword) {
                let token = jwt.sign({ name: user.name, email: user.email }, 'jwtsecret', { expiresIn: '7d' });
                return res.status(200).json({ success: true, token });
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