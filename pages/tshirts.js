import Link from 'next/link'

const tshirts = ({ products }) => {
    console.log(products)
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 my-16 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {
                        products.map((product) => {
                            return (
                                <Link href={`/product/${product.slug}`}>
                                    <div className="shadow-md shadow-gray-200 p-5 rounded-md border-[1px] border-gray-100">
                                        <div className="block relative rounded overflow-hidden">
                                            <img alt="ecommerce" className="m-auto h-[16rem] lg:h-[20rem] block" src={product.image} />
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest uppercase mb-1">{product.category}</h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                                            <p className="mt-1 text-sm">{product.size} | {product.color}</p>
                                            <p className="mt-1 text-gray-800 font-medium">&#8377;{product.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps() {
    const response = await fetch("http://localhost:3000/api/getproducts?category=tshirt")
    const products = await response.json()

    return { props: { products } }
}

export default tshirts