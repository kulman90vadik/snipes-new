import Layout from '@/components/Layout'
import style from '../styles/error.module.scss'
import global from '../styles/global.module.scss'
import Image from 'next/image'

const Error = () => {
	return (
		<Layout title='Not found'>
			<section className={style.error}>
				<div className={global.container}>
					<Image						
						src='/images/404.jpg'
						// width={600}
						// height={440}
            priority
            fill
						alt='Error Picture'
					/>
				</div>
			</section>
		</Layout>
	)
}

export default Error
