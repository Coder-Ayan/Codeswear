import { useRouter } from 'next/router';
import { useEffect } from 'react';

const account = () => {
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push('/')
        }
    }, [])
    return (
        <div>account</div>
    )
}

export default account