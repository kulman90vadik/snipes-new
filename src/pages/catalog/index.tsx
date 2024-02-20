import styles from '../../styles/catalog.module.scss'
import global from '../../styles/global.module.scss'

import Image from 'next/image'
import Link from 'next/link'
import { GetServerSideProps, GetStaticProps } from 'next'
import axios from 'axios'
import { FC } from 'react'
import Layout from '@/components/Layout'

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data } = await axios(`${process.env.API_URL_CATEGORIES}`)
		if (!data) { return { notFound: true } }
		return { props: { categories: data }, revalidate: 60 }
	} catch {
		return { props: { categories: null } }
	}
}
// export const getServerSideProps: GetServerSideProps = async () => {
// 	try {
// 		const { data } = await axios(`https://api.escuelajs.co/api/v1/categories`)
// 		if (!data) {
// 			return { notFound: true }
// 		}
// 		return { props: { categories: data } }
// 	} catch {
// 		return { props: { categories: null } }
// 	}
// }

type Props = {
	categories: categorieType[]
}

const Catalog: FC<Props> = ({ categories }) => {
	return (
		<Layout title='Catalog'>
			<section className={styles.catalog}>
				<div className={global.container}>
					<ul className={styles.list}>
						{categories &&
							categories.map((categorie: categorieType) => {
								return (
									<li className={styles.item} key={categorie.name}>
										<Link href={`/catalog/${categorie.name}`}>
											<article className={styles.product}>
												<div className={styles.photo}>
														<Image
															unoptimized
															className={styles.image}
															src={categorie.image}
															width="0"
															height="0"
															style={{ width: '100%', height: '100%' }}
															alt={categorie.name}
														/>
												</div>
												<span className={styles.name}>{categorie.name}</span>
											</article>
										</Link>
									</li>
								)
							})}
					</ul>
				</div>
			</section>
	</Layout>
	)
}

export default Catalog
