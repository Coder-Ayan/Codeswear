import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
	return (
		<div>
			<Head>
				<title>CodesWear - Wear the Code</title>
				<meta name="description" content="Codeswear - Wear the Code" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<img src='/home.png' alt='Wear the Code' className='w-screen'></img>
		</div>
	)
}
