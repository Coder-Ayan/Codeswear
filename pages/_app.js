import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const showHeaderAndFooter = ['/login', '/signup', '/forgotpassword'].includes(router.pathname) ? false : true;

	const [cart, setCart] = useState({})
	const [subTotal, setSubTotal] = useState(0)

	useEffect(() => {
		try {
			if (localStorage.getItem("cart")) {
				let newCart = JSON.parse(localStorage.getItem("cart"))
				setCart(newCart)
				saveSubTotal(newCart)
			}
		} catch (error) {
			console.error(error);
			localStorage.clear()
		}
	}, [])

	const saveSubTotal = (newCart) => {
		let subtotal = 0
		let keys = Object.keys(newCart)
		for (let i = 0; i < keys.length; i++) {
			let item = newCart[keys[i]]
			subtotal += item.price * item.quantity
		}
		setSubTotal(subtotal)
	}

	const saveCart = (newCart) => {
		localStorage.setItem("cart", JSON.stringify(newCart))
		saveSubTotal(newCart)
	}

	const buyNow = (itemCode, name, image, price, quantity, size, variant) => {
		let newCart = {}
		newCart[itemCode] = { name, image, price, quantity, size, variant }
		setCart(newCart)
		saveCart(newCart)
		router.push('/checkout')
	}

	const addToCart = (itemCode, name, image, price, quantity, size, variant) => {
		let newCart = cart
		if (itemCode in cart) {
			newCart[itemCode].quantity += quantity
		} else {
			newCart[itemCode] = { name, image, price, quantity, size, variant }
		}
		setCart(newCart)
		saveCart(newCart)
	}

	const clearCart = () => {
		setCart({})
		saveCart({})
	}

	const removeFromCart = (itemCode, quantity) => {
		let newCart = cart;
		if (itemCode in cart) {
			newCart[itemCode].quantity = newCart[itemCode].quantity - quantity
		}
		if (newCart[itemCode].quantity <= 0) {
			delete newCart[itemCode]
		}
		setCart(newCart)
		saveCart(newCart)
	}

	return (
		<>
			{showHeaderAndFooter && <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}
				clearCart={clearCart} buyNow={buyNow} subTotal={subTotal} />}
			<Component {...pageProps} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}
				clearCart={clearCart} buyNow={buyNow} subTotal={subTotal} />
			{showHeaderAndFooter && <Footer />}
		</>
	)
}

export default MyApp
