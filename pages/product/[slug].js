import { useRouter } from 'next/router'

const Slug = () => {
    const router = useRouter()
    return <p>Post: {router.query.slug}</p>
}

export default Slug