import Product from '../../models/Product'
import connectToMongoDB from '../../middlewares/connectToMongoDB'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let newProduct = new Product({
                title: req.body[i].title,
                description: req.body[i].description,
                slug: req.body[i].slug,
                image: req.body[i].image,
                category: req.body[i].category,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
                availableQty: req.body[i].availableQty
            })

            await newProduct.save()
        }
        return res.status(201).json({ message: "Product(s) added successfully" });
    } else {
        return res.status(405).json({ error: "Method Not Allowed", allow: ['POST'] });
    }
}

export default connectToMongoDB(handler)