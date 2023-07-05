import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const forgotpassword = () => {
    const router = useRouter()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            router.push('/')
        }
    }, [])

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-3 md:px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <Image width={200} height={40} src="/logo.png" alt="CODESWEAR" />
                </Link>
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-5 md:p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl">
                            Forgot Password
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5" placeholder="email@example.com" required />
                            </div>
                            <button type="submit" className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send Recovery Link</button>
                            <p className="text-sm font-light text-gray-500">
                                Get back to <Link href="/login" className="font-medium text-pink-600 hover:underline">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default forgotpassword