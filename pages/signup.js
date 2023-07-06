import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const signup = () => {
    const router = useRouter()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (localStorage.getItem('token')) {
            router.push('/')
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = { name, email, password }
        await fetch(`${process.env.HOST}/api/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        setName('')
        setEmail('')
        setPassword('')
        toast.success("Signed up successfully!");
    }

    const handleChange = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value)
        }
        else if (e.target.name === "email") {
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
                            Sign up to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                                <input onChange={handleChange} value={name} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5" placeholder="James Smith" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input onChange={handleChange} value={email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5" placeholder="email@example.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input onChange={handleChange} value={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5" required />
                            </div>
                            <button type="submit" className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
                            <p className="text-sm font-light text-gray-500">
                                Already have an account? <Link href="/login" className="font-medium text-pink-600 hover:underline">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default signup