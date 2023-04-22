import React from 'react';
import btAddToCart from 'icons/bt_add_to_cart.svg';
import '../styles/ProductItem.scss';

const ProductItem = ({ product }) => {
	return (
		<div className='ProductItem'>
			<img src={product.images[0]} alt={product.title} />
			<div className='product-info'>
				<div>
					<p>{product.price}$</p>
					<p>{product.title}</p>
				</div>
				<figure>
					<img src={btAddToCart} alt='' />
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;
