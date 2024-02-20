// import Layout from "@/components/Layout";
import '@/styles/reset.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default App
