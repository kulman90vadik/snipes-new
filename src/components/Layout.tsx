// import Footer from './Footer';
import Header from './Header'
import Meta from '../seo/Meta'
import { FC, PropsWithChildren } from 'react';
import { IMeta } from '@/seo/meta.interface';
import dynamic from 'next/dynamic';
// import '@/styles/reset.scss'

const DynamicFooter = dynamic(() => import('./Footer'), {
  ssr: false
})

const Layout: FC<PropsWithChildren<IMeta>> = ({children, description, title}) => {

  return (
    <>
    <Meta title={title} description={description}>
      <Header />
        <main style={{flexGrow: 1}}>
          {children}
        </main>
      <DynamicFooter />
    </Meta>
    </> 
  );
}
 
export default Layout;

