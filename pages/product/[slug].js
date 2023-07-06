import { useRouter } from 'next/router'
import { useState } from 'react'
import mongoose from 'mongoose'
import Product from '../../models/Product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Slug = ({ addToCart, buyNow, product, variants }) => {
    const router = useRouter()
    const { slug } = router.query
    const [pin, setPin] = useState('')
    const [serviceable, setServiceable] = useState()

    const handlePinChange = (event) => {
        setPin(event.target.value)
    }

    const checkServiceability = async () => {
        let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
        let pins = await response.json()

        if (pins.includes(parseInt(pin))) {
            setServiceable(true)
            toast.success('Your pincode is serviceable!')
        }
        else {
            setServiceable(false)
            toast.error('Sorry, your pincode is not serviceable!')
        }
    }

    const [color, setColor] = useState(product.color)
    const [size, setSize] = useState(product.size)

    const refreshVariant = (newcolor, newsize) => {
        let url
        if (variants[newcolor][newsize]) {
            url = `${process.env.NEXT_PUBLIC_HOST}/product/${variants[newcolor][newsize].slug}`
        } else {
            url = `${process.env.NEXT_PUBLIC_HOST}/product/${variants[newcolor][Object.keys(variants[newcolor])[0]].slug}`
        }

        window.location = url
    }

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="container px-5 py-16 mx-auto">
                <div className="lg:w-5/6 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full">
                        <img alt="ecommerce" className="h-80 sm:h-[32rem] mx-auto object-center rounded" src={product.image} />
                    </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESWEAR</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title} ({size}/{color})</h1>

                        {/* <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                    </svg>
                                </a>
                            </span>
                        </div> */}

                        <p className="leading-relaxed mt-4">{product.description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                {Object.keys(variants).includes('white') && <button onClick={() => refreshVariant('white', size)} className={`border-2 bg-white rounded-full w-6 h-6 focus:outline-none ${color === 'white' ? 'border-black' : 'border-gray-300'}`} />}
                                {Object.keys(variants).includes('black') && <button onClick={() => refreshVariant('black', size)} className={`border-2 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none ${color === 'black' ? 'border-black' : 'border-gray-300'}`} />}
                                {Object.keys(variants).includes('red') && <button onClick={() => refreshVariant('red', size)} className={`border-2 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none ${color === 'red' ? 'border-black' : 'border-gray-300'}`} />}
                                {Object.keys(variants).includes('blue') && <button onClick={() => refreshVariant('blue', size)} className={`border-2 ml-1 bg-blue-600 rounded-full w-6 h-6 focus:outline-none ${color === 'blue' ? 'border-black' : 'border-gray-300'}`} />}
                                {Object.keys(variants).includes('green') && <button onClick={() => refreshVariant('green', size)} className={`border-2 ml-1 bg-green-600 rounded-full w-6 h-6 focus:outline-none ${color === 'green' ? 'border-black' : 'border-gray-300'}`} />}
                                {Object.keys(variants).includes('yellow') && <button onClick={() => refreshVariant('yellow', size)} className={`border-2 ml-1 bg-yellow-600 rounded-full w-6 h-6 focus:outline-none ${color === 'yellow' ? 'border-black' : 'border-gray-300'}`} />}
                                {Object.keys(variants).includes('purple') && <button onClick={() => refreshVariant('purple', size)} className={`border-2 ml-1 bg-purple-600 rounded-full w-6 h-6 focus:outline-none ${color === 'purple' ? 'border-black' : 'border-gray-300'}`} />}
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select value={size} onChange={(e) => refreshVariant(color, e.target.value)} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                                        {Object.keys(variants[color]).includes('XS') && <option>XS</option>}
                                        {Object.keys(variants[color]).includes('S') && <option>S</option>}
                                        {Object.keys(variants[color]).includes('M') && <option>M</option>}
                                        {Object.keys(variants[color]).includes('L') && <option>L</option>}
                                        {Object.keys(variants[color]).includes('XL') && <option>XL</option>}
                                        {Object.keys(variants[color]).includes('XXL') && <option>XXL</option>}
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="title-font font-medium text-2xl text-gray-900">&#8377;{product.price}</span>
                            <button onClick={() => buyNow(slug, product.title, product.image, product.price, 1, size, color)} className="flex items-center ml-auto xl:ml-20 text-white bg-pink-500 border-0 py-1.5 md:py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded text-sm md:text-base">Buy Now</button>
                            <button onClick={() => addToCart(slug, product.title, product.image, product.price, 1, size, color)} className="flex items-center ml-2 xl:ml-4 text-white bg-pink-500 border-0 py-1.5 md:py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded text-sm md:text-base">Add to Cart</button>
                            <button className="rounded-full w-9 md:w-10 h-9 md:h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-2 xl:ml-4">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-5 py-5 border-t-2 border-gray-100">
                            <div className="flex space-x-4 items-end">
                                <div className="w-44">
                                    <input type="number" id="pin" name="pin" value={pin} onChange={handlePinChange} placeholder='Enter your pincode' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-sm outline-none text-gray-700 py-1.5 px-3 transition-colors duration-200 ease-in-out" />
                                </div>
                                <button onClick={checkServiceability} className="text-white bg-pink-500 border-0 py-1.5 px-5 focus:outline-none hover:bg-pink-600 rounded text-sm mb-0.5">Check</button>
                            </div>
                            {serviceable && serviceable != null &&
                                <p className="text-green-600 text-sm mt-3">
                                    Yay! This pincode is serviceable.
                                </p>
                            }
                            {!serviceable && serviceable != null &&
                                <p className="text-red-600 text-sm mt-3">
                                    Sorry! This pincode is not serviceable.
                                </p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
    }

    let product = await Product.findOne({ slug: context.query.slug })
    let variants = await Product.find({ title: product.title, category: product.category })
    let colorSizeSlug = {}

    for (const item of variants) {
        if (Object.keys(colorSizeSlug).includes(item.color)) {
            colorSizeSlug[item.color][item.size] = { slug: item.slug }
        } else {
            colorSizeSlug[item.color] = {}
            colorSizeSlug[item.color][item.size] = { slug: item.slug }
        }
    }

    return { props: { product: JSON.parse(JSON.stringify(product)), variants: colorSizeSlug } }
}

export default Slug