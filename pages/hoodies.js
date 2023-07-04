import Link from 'next/link'
import Product from '../models/Product'
import mongoose from 'mongoose'

const hoodies = ({ products }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-2 md:px-5 my-5 md:my-10 mx-auto">
                <div className="flex flex-wrap justify-center">
                    {Object.keys(products).length < 1 && <p className="text-center">Sorry, all hoodies are currently out of stock. New stock coming soon. Stay tuned!</p>}
                    {Object.keys(products).map((key) => {
                        let product = products[key]
                        return (
                            <Link key={product.slug} href={`/product/${product.slug}`} className="xl:w-1/4 lg:w-1/3 md:w-1/2 p-4 w-full">
                                <div className="shadow-md shadow-gray-200 p-5 rounded-md border-[1px] border-gray-100">
                                    <div className="block relative rounded overflow-hidden">
                                        <img alt="ecommerce" className="m-auto h-[16rem] lg:h-[20rem] block" src={product.image} />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest uppercase mb-1">{product.category}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                                        <p className="mt-2 mb-3 text-gray-600 font-medium">&#8377;{product.price}</p>
                                        <div className="mt-1">
                                            {product.size.includes('XS') && <span className="text-sm border border-gray-300 p-1 m-1">XS</span>}
                                            {product.size.includes('S') && <span className="text-sm border border-gray-300 p-1 m-1">S</span>}
                                            {product.size.includes('M') && <span className="text-sm border border-gray-300 p-1 m-1">M</span>}
                                            {product.size.includes('L') && <span className="text-sm border border-gray-300 p-1 m-1">L</span>}
                                            {product.size.includes('XL') && <span className="text-sm border border-gray-300 p-1 m-1">XL</span>}
                                            {product.size.includes('XXL') && <span className="text-sm border border-gray-300 p-1 m-1">XXL</span>}
                                        </div>
                                        <div className="mt-2">
                                            {product.color.includes('white') && <button className="border-2 border-gray-300 bg-white rounded-full w-6 h-6 focus:outline-none" />}
                                            {product.color.includes('black') && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none" />}
                                            {product.color.includes('red') && <button className="border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none" />}
                                            {product.color.includes('blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-600 rounded-full w-6 h-6 focus:outline-none" />}
                                            {product.color.includes('green') && <button className="border-2 border-gray-300 ml-1 bg-green-600 rounded-full w-6 h-6 focus:outline-none" />}
                                            {product.color.includes('yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-600 rounded-full w-6 h-6 focus:outline-none" />}
                                            {product.color.includes('purple') && <button className="border-2 border-gray-300 ml-1 bg-purple-600 rounded-full w-6 h-6 focus:outline-none" />}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps() {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
    }

    let products = await Product.find({ category: 'hoodie' })
    let hoodies = {};

    for (const product of products) {
        if (product.title in hoodies) {
            if (!hoodies[product.title].color.includes(product.color) && product.availableQty > 0) {
                hoodies[product.title].color.push(product.color)
            }
            if (!hoodies[product.title].size.includes(product.size) && product.availableQty > 0) {
                hoodies[product.title].size.push(product.size)
            }
        } else {
            if (product.availableQty > 0) {
                hoodies[product.title] = JSON.parse(JSON.stringify(product))
                hoodies[product.title].color = [product.color]
                hoodies[product.title].size = [product.size]
            }
        }
    }

    return { props: { products: hoodies } }
}

export default hoodies