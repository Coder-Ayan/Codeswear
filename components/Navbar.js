import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react'
import { AiOutlineShoppingCart, AiOutlineCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { FaTrashAlt, FaUser } from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';

const Navbar = ({ user, logout, cart, addToCart, removeFromCart, clearCart, subTotal }) => {
    const Cart = useRef()
    const Dropdown = useRef()

    const toggleCart = () => {
        if (Cart.current.classList.contains('translate-x-full')) {
            Cart.current.classList.remove('translate-x-full')
            Cart.current.classList.add('translate-x-0')
        }
        else if (Cart.current.classList.contains('translate-x-0')) {
            Cart.current.classList.remove('translate-x-0')
            Cart.current.classList.add('translate-x-full')
        }
    }

    const toggleDropdown = () => {
        if (Dropdown.current.classList.contains('hidden', 'opacity-0', 'scale-95')) {
            Dropdown.current.classList.remove('hidden', 'opacity-0', 'scale-95')
            Dropdown.current.classList.add('opacity-100', 'scale-100')
        }
        else if (Dropdown.current.classList.contains('opacity-100', 'scale-100')) {
            Dropdown.current.classList.remove('opacity-100', 'scale-100')
            Dropdown.current.classList.add('hidden', 'opacity-0', 'scale-95')
        }
    }
    return (
        <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 z-50 bg-white" >
            <div className="logo mr-auto ml-3 md:mx-5">
                <Link href="/"><Image width={200} height={40} src="/logo.png" alt="" /></Link>
            </div>
            <div classhame="nav">
                <ul className="flex items-center font-semibold space-x-6 md:text-base">
                    <Link href="/tshirts" className="hover:text-pink-600"><li>Tshirts</li></Link>
                    <Link href="/hoodies" className="hover:text-pink-600"><li>Hoodies</li></Link>
                    <Link href="/stickers" className="hover:text-pink-600"><li>Stickers</li></Link>
                    <Link href="/mugs" className="hover:text-pink-600"><li>Mugs</li></Link>
                </ul>
            </div>
            <div className="flex items-center justify-center absolute right-0 top-[1.4rem] md:top-4 mx-3 md:mx-5">
                {user.value ?
                    <div className="relative inline-block text-left">
                        <FaUser onClick={toggleDropdown} className="cursor-pointer text-lg md:text-2xl text-pink-500 mr-3 md:mr-5" />
                        <div ref={Dropdown} className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition transform hidden opacity-0 scale-95" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            <div className="py-1" role="none">
                                <Link href="/account" className="text-gray-700 block px-4 py-2 text-sm hover:bg-pink-100" role="menuitem" tabIndex={-1} id="menu-item-0">My Account</Link>
                                <Link href="/orders" className="text-gray-700 block px-4 py-2 text-sm hover:bg-pink-100" role="menuitem" tabIndex={-1} id="menu-item-1">Orders</Link>
                            </div>
                            <div className="py-1" role="none">
                                <div onClick={logout} className="text-gray-700 block px-4 py-2 text-sm hover:bg-pink-100 cursor-pointer" role="menuitem" tabIndex={-1} id="menu-item-6">Sign out</div>
                            </div>
                        </div>
                    </div> :
                    <Link href="/login"><MdLogin className="cursor-pointer text-2xl md:text-3xl text-pink-500 mr-3 md:mr-5" /></Link>}
                <AiOutlineShoppingCart onClick={toggleCart} className="cursor-pointer text-2xl md:text-3xl text-pink-500" />
            </div>
            <div ref={Cart} className={`sideCart fixed top-0 right-0 bg-pink-50 py-10 px-8 w-[18rem] sm:w-[22rem] h-screen rounded transform transition-transform ${Object.keys(cart).length === 0 ? 'translate-x-full' : 'translate-x-0'}`}>
                <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"><AiOutlineCloseCircle /></span>
                <h1 className="font-bold text-xl text-center mb-5">Shopping Cart</h1>
                {Object.keys(cart).length === 0 && <p className="text-base font-medium">Your cart is empty!</p>}
                <ol className="list-decimal font-medium">
                    {
                        Object.keys(cart).map((itemCode) => {
                            let item = cart[itemCode];
                            return (
                                <li className="my-3" key={itemCode}>
                                    <div className="item flex">
                                        <div className="w-2/3 sm:w-3/4 pr-2">{item.name}({item.size}/{item.variant})</div>
                                        <div className="flex items-center justify-center text-lg w-1/3 sm:w-1/4 space-x-3">
                                            <AiFillMinusCircle onClick={() => removeFromCart(itemCode, 1)} className="cursor-pointer text-pink-500" />
                                            <span className="quantity">{item.quantity}</span>
                                            <AiFillPlusCircle onClick={() => addToCart(itemCode, item.name, item.image, item.price, 1, item.size, item.variant)} className="cursor-pointer text-pink-500" />
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ol>
                <div className="mt-5 font-semibold text-lg">Subtotal <span className="ml-2">&#8377;{subTotal}</span></div>
                <div className="flex mt-5 space-x-4">
                    <Link href="/checkout">
                        <button className="flex items-center text-white bg-pink-500 border-0 py-2 px-2 md:px-5 focus:outline-none hover:bg-pink-600 rounded text-sm md:text-base leading-none"><BsFillBagCheckFill className="m-1" />Checkout</button>
                    </Link>
                    <button onClick={clearCart} className="flex items-center text-pink-500 hover:text-white border border-pink-500 py-2 px-2 md:px-5 focus:outline-none hover:bg-pink-500 rounded text-sm md:text-base leading-none"><FaTrashAlt className="m-1" />Clear Cart</button>
                </div>
            </div>
        </div >
    )
}

export default Navbar