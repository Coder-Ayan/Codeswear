import React from 'react'

const order = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-12 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESWEAR</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order #68442</h1>
                        <p className="leading-relaxed mb-4">Your order has been placed successfully!</p>
                        <div className="flex border-t border-gray-200 py-2 text-gray-600">
                            <span>Item</span>
                            <span className="ml-auto">Quantity</span>
                            <span className="ml-auto">Price</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2 text-gray-900">
                            <span>Wear the code (Black/XL)</span>
                            <span className="mx-auto">1</span>
                            <span className="ml-auto">&#8377;499</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2 text-gray-900">
                            <span>Wear the code (Black/XL)</span>
                            <span className="mx-auto">1</span>
                            <span className="ml-auto">&#8377;499</span>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2 text-gray-900">
                            <span>Wear the code (Black/XL)</span>
                            <span className="mx-auto">1</span>
                            <span className="ml-auto">&#8377;499</span>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <span className="title-font font-medium text-2xl text-gray-900">Subtotal: &#8377;1497</span>
                            <button className="flex md:ml-auto justify-center text-white bg-pink-500 border-0 mt-3 md:mt-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
                        </div>
                    </div>
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                </div>
            </div>
        </section>
    )
}

export default order