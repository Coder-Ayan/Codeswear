import Product from '../../models/Product'
import connectToMongoDB from '../../middlewares/connectToMongoDB'

const handler = async (req, res) => {
    let products = await Product.find()
    let tshirts = {};

    for (const product of products) {
        if (product.title in tshirts) {
            if (!tshirts[product.title].color.includes(product.color) && product.availableQty > 0) {
                tshirts[product.title].color.push(product.color)
            }
            if (!tshirts[product.title].size.includes(product.size) && product.availableQty > 0) {
                tshirts[product.title].size.push(product.size)
            }
        } else {
            if (product.availableQty > 0) {
                tshirts[product.title] = JSON.parse(JSON.stringify(product))
                tshirts[product.title].color = [product.color]
                tshirts[product.title].size = [product.size]
            }
        }
    }

    res.status(200).json(tshirts)
}

export default connectToMongoDB(handler)