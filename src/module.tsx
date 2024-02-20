
type navLinkType = {
  lebel: string;
  href: string
}

type productType = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: {
    id: number;
    name: string;
    image: string
  };
  images: string[]
}

type categorieType = {
  id: number;
  name: string;
  image: string;
}

// type socialsType = {
//   lebel: string;
//   href: string
// }