/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'com']
  }
};

export default nextConfig;


// export const getStaticProps:GetStaticProps = async (context) => {
//   const {id} = context.params;
// 	const { data } = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
// 	if(!data) { return { notFound: true} }
// 	return {props: {post: data}}
// }

// type Props = {
// 	post: postsType
// }


// export const getServerSideProps:GetServerSideProps = async (context) => {
//   // const obj:{id: string} = context.params;
//   const {id} = context.params;
//   // const id = obj['id'];
// const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
// if(!data) { return { notFound: true} }
// return {props: {contact: data}}
// }
// type Props = {
// contact: usersType
// }

{/* <Link className={styles.title} href={`/contacts/${item.id}`}>{item.name}</Link> */}



// export async function getDataCategories() {
// 	const respons = await fetch(`https://api.escuelajs.co/api/v1/categories`, {
// 		next: {
// 			revalidate: 60
// 		}
// 	})
// 	return respons.json()
// }


// type Props = {
// 	id: number
// }

// export async function getDataCategoriesId({id }: Props) {
// 	const respons = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`, {
// 		next: {
// 			revalidate: 60
// 		}
// 	})
// 	return respons.json()
// }