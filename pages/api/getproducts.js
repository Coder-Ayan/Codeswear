import Product from '../../models/Product'
import connectToMongoDB from '../../middlewares/connectToMongoDB'

const handler = async (req, res) => {
    let products = await Product.find()
    res.status(200).json({ products })
}

export default connectToMongoDB(handler)