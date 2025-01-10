import '../declaration.d.ts'
import './App.css'
import products from '../data.json'
import { useState } from 'react'

export default function App() {
	const [quantity, setQuantity] = useState(0);

  	return (
		<>
			<div className="container">
				<div className="products">
					<h1 className="product-title">Desserts</h1>
					<div className="product-list">
						{products.map((product) => (
							<div key={product.id} className="product">
								<img className="product-img" src={product.image.desktop} alt={product.name} width={250}/>
								<button className="product-btn">Add to Cart</button>
								<p className="product-category">{product.category}</p>
								<h2 className="product-name">{product.name}</h2>
								<p className="product-price">${product.price}</p>
							</div>
						))}
					</div>
				</div>

				<div className="cart">
					<h3 className="cart-title">Your Cart ({ quantity })</h3>
					<p className="cart-description">Your added items will appear here</p>
				</div>
			</div>
		</>
	)
}