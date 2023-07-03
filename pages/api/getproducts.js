import Product from '../../models/Product'
import connectToMongoDB from '../../middlewares/connectToMongoDB'

const handler = async (req, res) => {
    const category = req.query.category;
    let products;

    if (category) {
        products = await Product.find({ category })
    } else {
        products = await Product.find()
    }
    res.status(200).json(products)
}

export default connectToMongoDB(handler)