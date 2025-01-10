import '../declaration.d.ts'
import './App.css'
import products from '../data.json'

export default function App() {
  	return (
		<>
			<div className="products">
				<h1 className="product-title">Desserts</h1>
				<p className="product">Our selection of desserts</p>
				<div className="product-list">
					{products.map((product) => (
						<div key={product.id} className="product">
							<img className="product-img" src={product.image.desktop} alt={product.name} width={150}/>
							<p className="product-category">{product.category}</p>
							<h2 className="product-name">{product.name}</h2>
							<p className="product-price">${product.price}</p>
							<button className="product-btn">Add to Cart</button>
						</div>
					))}
				</div>
			</div>

			<div className="cart">
				<h3 className="cart-title">Your Cart (-- Quantity --)</h3>
				<p className="cart-description">Your added items will appear here</p>
			</div>
		</>
	)
}