import Product from '../../models/Product'
import connectToMongoDB from '../../middlewares/connectToMongoDB'

const handler = async (req, res) => {
    if (req.method === 'PUT') {
        for (let i = 0; i < req.body.length; i++) {
            await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }
        return res.status(201).json({ message: "Product(s) updated successfully" });
    } else {
        return res.status(405).json({ error: "Method Not Allowed", allow: ['PUT'] });
    }
}

export default connectToMongoDB(handler)