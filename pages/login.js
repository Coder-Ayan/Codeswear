import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (localStorage.getItem('token')) {
            router.push('/')
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = { email, password }
        let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        let responseData = await response.json()

        setEmail('')
        setPassword('')

        if (responseData.success) {
            localStorage.setItem('token', responseData.token)
            toast.success("Logged in successfully!");
            setTimeout(() => {
                router.push('/')
            }, 1000);
        } else {
            toast.error(responseData.message);
        }
    }

    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value)
        }
        else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }
    return (
        <section className="bg-gray-50">
            <ToastContainer
                position="top-right"
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
            <div className="flex flex-col items-center justify-center px-3 md:px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <Image width={200} height={40} src="/logo.png" alt="CODESWEAR" />
                </Link>
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-5 md:p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl">
                            Login to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input onChange={handleChange} value={email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input onChange={handleChange} value={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5" required />
                            </div>
                            <div className="flex items-center justify-between">
                                {/* <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-pink-300" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                    </div>
                                </div> */}
                                <Link href="/forgotpassword" className="text-sm font-medium text-pink-600 hover:underline">Forgot password?</Link>
                            </div>
                            <button type="submit" className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                            <p className="text-sm font-light text-gray-500">
                                Don't have an account yet? <Link href="/signup" className="font-medium text-pink-600 hover:underline">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default login