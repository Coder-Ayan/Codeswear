import { HiMiniTrash } from 'react-icons/hi2';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

const checkout = ({ cart, addToCart, removeFromCart, subTotal }) => {
    return (
        <>
            <div className="mt-10">
                <h1 className="flex items-center justify-center font-bold text-pink-600 text-3xl">Checkout</h1>
            </div>
            <div className="container p-4 md:p-12 mx-auto">
                <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                    <div className="flex flex-col md:w-full">
                        <h2 className="mb-4 font-bold text-xl ">Shipping Address
                        </h2>
                        <form className="justify-center w-full mx-auto">
                            <div>
                                <div className="space-y-4 lg:space-y-0 space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full lg:w-1/2">
                                        <label htmlFor="firstName" className="block mb-2 text-sm font-semibold text-gray-500">First
                                            Name</label>
                                        <input name="firstName" type="text" placeholder="First Name" className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-pink-500" />
                                    </div>
                                    <div className="w-full lg:w-1/2 ">
                                        <label htmlFor="firstName" className="block mb-2 text-sm font-semibold text-gray-500">Last
                                            Name</label>
                                        <input name="Last Name" type="text" placeholder="Last Name" className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-pink-500" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label htmlFor="Email" className="block mb-2 text-sm font-semibold text-gray-500">Email</label>
                                        <input name="Last Name" type="text" placeholder="Email" className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-pink-500" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label htmlFor="Address" className="block mb-2 text-sm font-semibold text-gray-500">Address</label>
                                        <textarea className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-pink-500" name="Address" cols={20} rows={4} placeholder="Address" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="mt-4 space-y-4 lg:space-y-0 space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full lg:w-1/2">
                                        <label htmlFor="city" className="block mb-2 text-sm font-semibold text-gray-500">City</label>
                                        <input name="city" type="text" placeholder="City" className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-pink-500" />
                                    </div>
                                    <div className="w-full lg:w-1/2 ">
                                        <label htmlFor="postcode" className="block mb-2 text-sm font-semibold text-gray-500">
                                            Postcode</label>
                                        <input name="postcode" type="text" placeholder="Post Code" className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-pink-500" />
                                    </div>
                                </div>
                                <div className="relative pt-3 xl:pt-6"><label htmlFor="note" className="block mb-2 text-sm font-semibold text-gray-500"> Notes
                                    (Optional)</label><textarea name="note" className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-500" rows={4} placeholder="Notes for delivery" defaultValue={""} />
                                </div>
                                <div className="mt-4">
                                    <button className="w-full px-6 py-2 rounded text-white bg-pink-500 hover:bg-pink-600">Process</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-3/5">
                        <div className="pt-12 md:pt-0 2xl:ps-4">
                            <h2 className="text-xl font-bold">Order Summary
                            </h2>
                            <div className="mt-8">
                                {Object.keys(cart).length === 0 && <p className="text-base font-medium">Your cart is empty!</p>}
                                <div className="flex flex-col space-y-4">
                                    {
                                        Object.keys(cart).map((itemCode) => {
                                            let item = cart[itemCode];
                                            return (
                                                <div key={itemCode} className="flex p-2 md:p-4 border rounded-md">
                                                    <div className="w-2/6">
                                                        <img src="https://m.media-amazon.com/images/I/61K4wziiNhL._UX679_.jpg" alt="image" className="max-h-36 rounded mx-auto" />
                                                    </div>
                                                    <div className="w-4/6 pl-4 flex flex-col justify-between">
                                                        <div>
                                                            <h3 className="text-base md:text-lg font-semibold">{item.name}</h3>
                                                            <p className="text-sm md:text-base text-gray-500">{item.variant}</p>
                                                            <p className="text-sm md:text-base text-gray-500">{item.size}</p>
                                                        </div>
                                                        <p className="font-medium text-base md:text-lg">&#8377;{item.price}</p>
                                                    </div>
                                                    <div className="flex flex-col justify-between">
                                                        <HiMiniTrash onClick={() => removeFromCart(itemCode, item.quantity)} className="text-gray-400 text-xl md:text-2xl cursor-pointer ml-auto" />
                                                        <div className="flex items-center justify-center text-lg space-x-1 ml-auto">
                                                            <AiFillMinusCircle onClick={() => removeFromCart(itemCode, 1)} className="cursor-pointer text-pink-500" />
                                                            <span className="quantity font-semibold">{item.quantity}</span>
                                                            <AiFillPlusCircle onClick={() => addToCart(itemCode, item.name, item.price, 1, item.size, item.variant)} className="cursor-pointer text-pink-500" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="flex p-4 mt-4">
                                <h2 className="text-xl font-bold">ITEMS 2</h2>
                            </div>
                            <div className="flex items-center justify-between w-full py-4 text-base font-medium text-gray-600lg:py-5 lg:px-3 text-heading">
                                Subtotal <span className="ml-2">&#8377;{subTotal}</span>
                            </div>
                            <div className="flex items-center justify-between w-full py-4 text-base font-medium text-gray-600lg:py-5 lg:px-3 text-heading">
                                Shipping Tax <span className="ml-2">&#8377;{Object.keys(cart).length !== 0 ? 50 : 0}</span>
                            </div>
                            <div className="flex items-center justify-between w-full py-4 mt-2 text-lg font-semibold border-t border-gray-300 lg:py-5 lg:px-3">
                                Total <span className="ml-2">&#8377;{subTotal + (Object.keys(cart).length !== 0 ? 50 : 0)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default checkout