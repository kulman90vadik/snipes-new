import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import style from '@/styles/products.module.scss'
import global from '@/styles/global.module.scss'
import Product from "@/components/Product";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";


// type Props = {
//   name: string;
// }    

// export async function generateMetadata({name}: Props) {
// return {
//   // title: name.toLowerCase()
//   title: name
// }
// }

// categorie 
export const getStaticPaths:GetStaticPaths = async () => {
  const { data } = await axios(`${process.env.API_URL_CATEGORIES}`)
  const paths = data.map((item: categorieType) => ({
    params: {categorie: item.name},
    // params: {id: item.id.toString()},
  }));
  return { paths, fallback: 'blocking' }
}


// products
export const getStaticProps: GetStaticProps = async (context) => {
  const {categorie} = context.params;
  // console.log(Lname)
	try {
		const { data } = await axios(`${process.env.API_URL_PRODUCTS}`)
		if (!data) {return { notFound: true }}
		// console.log(name.toLowerCase());
		return { props: { products: data.filter((obj: productType) => obj.category.name.toLowerCase() === categorie.toLowerCase()) } }
	} catch {	return { props: { products: null } }}
}

type Props = {
	products: productType[];
}

// const nametitle = `category`
const PageCategorie = ({products} : Props) => {
  const router = useRouter()
  let title = router.query['categorie']
  // console.log()
  return (
    <Layout title={String(title)}>
      <section className={style.products}>
          <div className={global.container}>
            <ul className={style.list}>
                {products.map((product:productType) => {
                  return (
                    <li className={style.item} key={product.title}>
                      <Product product={product} />
                    </li>
                  )
                })}
            </ul>
          </div>
      </section>
    </Layout>
  );
}
 
export default PageCategorie;