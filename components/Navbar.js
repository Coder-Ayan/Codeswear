import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react'
import { AiOutlineShoppingCart, AiOutlineCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';

const Navbar = () => {
    const Cart = useRef()

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
    return (
        <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md" >
            <div className="logo mx-5">
                <Link href="/"><Image width={200} height={40} src="/logo.png" alt="" /></Link>
            </div>
            <div classhame="nav">
                <ul className="flex items-center font-semibold space-x-6 md:text-base">
                    <Link href="/tshirts"><li>Tshirts</li></Link>
                    <Link href="/hoodies"><li>Hoodies</li></Link>
                    <Link href="/stickers"><li>Stickers</li></Link>
                    <Link href="/mugs"><li>Mugs</li></Link>
                </ul>
            </div>
            <div className="cart absolute right-0 top-4 mx-5">
                <AiOutlineShoppingCart onClick={toggleCart} className="cursor-pointer text-xl md:text-3xl text-pink-500" />
            </div>
            <div ref={Cart} className="sideCart fixed top-0 right-0 bg-pink-50 py-10 px-8 w-[18rem] sm:w-[22rem] h-screen rounded transform transition-transform translate-x-full">
                <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"><AiOutlineCloseCircle /></span>
                <h1 className="font-bold text-xl text-center mb-5">Shopping Cart</h1>
                <ol className="list-decimal font-semibold">
                    <li className="my-3">
                        <div className="item flex">
                            <div className='w-2/3 sm:w-3/4 pr-2'>Tshirt - Wear the Code</div>
                            <div className="flex items-center justify-center text-lg w-1/3 sm:w-1/4 space-x-3">
                                <AiFillMinusCircle className="cursor-pointer text-pink-500" />
                                <span className="quantity">1</span>
                                <AiFillPlusCircle className="cursor-pointer text-pink-500" />
                            </div>
                        </div>
                    </li>
                    <li className="my-3">
                        <div className="item flex">
                            <div className='w-2/3 sm:w-3/4 pr-2'>Tshirt - Wear the Code</div>
                            <div className="flex items-center justify-center text-lg w-1/3 sm:w-1/4 space-x-3">
                                <AiFillMinusCircle className="cursor-pointer text-pink-500" />
                                <span className="quantity">1</span>
                                <AiFillPlusCircle className="cursor-pointer text-pink-500" />
                            </div>
                        </div>
                    </li>
                    <li className="my-3">
                        <div className="item flex">
                            <div className='w-2/3 sm:w-3/4 pr-2'>Tshirt - Wear the Code</div>
                            <div className="flex items-center justify-center text-lg w-1/3 sm:w-1/4 space-x-3">
                                <AiFillMinusCircle className="cursor-pointer text-pink-500" />
                                <span className="quantity">1</span>
                                <AiFillPlusCircle className="cursor-pointer text-pink-500" />
                            </div>
                        </div>
                    </li>
                    <li className="my-3">
                        <div className="item flex">
                            <div className='w-2/3 sm:w-3/4 pr-2'>Tshirt - Wear the Code</div>
                            <div className="flex items-center justify-center text-lg w-1/3 sm:w-1/4 space-x-3">
                                <AiFillMinusCircle className="cursor-pointer text-pink-500" />
                                <span className="quantity">1</span>
                                <AiFillPlusCircle className="cursor-pointer text-pink-500" />
                            </div>
                        </div>
                    </li>
                    <li className="my-3">
                        <div className="item flex">
                            <div className='w-2/3 sm:w-3/4 pr-2'>Tshirt - Wear the Code</div>
                            <div className="flex items-center justify-center text-lg w-1/3 sm:w-1/4 space-x-3">
                                <AiFillMinusCircle className="cursor-pointer text-pink-500" />
                                <span className="quantity">1</span>
                                <AiFillPlusCircle className="cursor-pointer text-pink-500" />
                            </div>
                        </div>
                    </li>
                </ol>
                <button className="flex mt-10 text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded text-base"><BsFillBagCheckFill className="m-1"/> Checkout</button>
            </div>
        </div >
    )
}

export default Navbar