import mongoose from 'mongoose';
import Order from '../models/Order'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const orders = () => {
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push('/')
        }
    }, [])
    return (
        <section className="container mx-auto px-5 py-10">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-100">
                <table className="w-full text-sm text-left text-gray-500 table-auto">
                    <caption className="p-5 text-2xl font-bold text-left text-gray-900 bg-white">
                        Your Orders
                        <p className="mt-1 text-sm font-normal text-gray-500">replace may package most adjective stretch white age watch victory drop steady forgotten rope put strength ill reader sang total daughter of join iron</p>
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Track Order</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-pink-600 hover:underline">Track Order</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">
                                White
                            </td>
                            <td className="px-6 py-4">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-pink-600 hover:underline">Track Order</a>
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                Black
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                $99
                            </td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-pink-600 hover:underline">Track Order</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export async function getServerSideProps() {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
    }

    let orders = await Order.find({})

    return { props: { orders } }
}

export default orders