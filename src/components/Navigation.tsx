'use client'

import Link from 'next/link'
import styles from '../styles/navigation.module.scss'
import { dataNavLinks } from '../pages/api/data/dataNavLinks'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
// import axios from 'axios'
// import { GetStaticProps } from 'next'

// export const getStaticProps:GetStaticProps = async () => {
//   try {
//     const { data } = await axios('http://localhost:3000/api/dataNavLinks/');
// 		console.log({data})
//     if(!data) {return { notFound: true}}
//     return {props: {dataNavLinks: data}}
//   }
//   catch {
//     return {props: {dataNavLinks: null}}
//   }
// }

// type Props = {
// 	dataNavLinks: navLinkType[]
// }



const Navigation:FC = () => {
	const pathname = usePathname()
	return (
		<nav className={styles.navigation}>
			<ul className={styles.list}>
				{dataNavLinks && dataNavLinks.map((item: navLinkType) => {
					return (
						<li className={styles.item} key={item.href}>
							<Link
								className={`${styles.link} ${
									item.href === pathname ? styles.active : styles.link
								}`}
								href={item.href}
							>
								{item.lebel}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Navigation
