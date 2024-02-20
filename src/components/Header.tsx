import styles from '../styles/header.module.scss';
import global from '../styles/global.module.scss'
import Image from 'next/image';
import Navigation from './Navigation'

import { FC } from 'react'
// import { GetStaticProps } from 'next'

// export const getStaticProps:GetStaticProps = async () => {
//   try {
//     const { data } = await axios(`${process.env.API_HOST}/dataNavLinks/`);
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



const Header:FC = () => {
	return (
    <header className={styles.header}>
      <div className={global.container}>
        <div className={styles.inner}>
          <Image className={styles.logo} src="/images/logo.svg" width={50} height={50} alt="Photo"/>
          
          <Navigation />
        </div>
      </div>
    </header>
  )
}

export default Header
