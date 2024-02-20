'use client'

import { FC, useState } from 'react'
import style from '../styles/product.module.scss'
import global from '../styles/product.module.scss'
import Image from 'next/image'

type Props = {
	product: productType
}

const Product: FC<Props> = ({ product }) => {
	const [countImage, setCountImage] = useState(0)
	const changeImage = (index: number) => {
		setCountImage(index)
	}

	return (
		<article className={style.product}>
			<div className={style.photos}>
				<div className={style.photo}>
					<Image
						unoptimized
						className={style.imageBig}
						src={product.images[countImage]}
						width={100}
						height={150}
						alt={product.title}
					/>
				</div>
				<ul className={style.list}>
					{product.images.map((img, index) => {
						return (
							<li key={index} className={style.item} onClick={() => changeImage(index)}>
								<Image
									unoptimized
									className={style.image}
									src={img}
									width="0"
									height="0"
									style={{ width: '100%', height: '100%' }}
									alt={product.title}
								/>
							</li>
						)
					})}
				</ul>
			</div>
			<span className={style.title}>{product.title}</span>
			<span className={style.price}>
				{new Intl.NumberFormat('de-DE', {
					style: 'currency',
					currency: 'EUR'
				}).format(product.price)}
			</span>
			<button className={`${global.btnReset} ${style.btn}`} type='button'>
				Add to Card
			</button>
		</article>
	)
}

export default Product
