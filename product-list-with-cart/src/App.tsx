import '../declaration.d.ts'
import './App.css'
import products from '../data.json'
import { useState } from 'react'
import { Dialog } from 'primereact/dialog';

interface Product {
	id: number;
	name: string;
	price: number;
	quantity?: number;
}

interface Cart {
	products: Product[];
	total: number;
}

export default function App() {
	const [quantity, setQuantity] = useState(0);
	const [visible, setVisible] = useState(false);
	const [cart, setCart] = useState<Cart>({products: [], total: 0});

	const handleAddToCart = (product: Product) => {
		const id = product.id;
		const productIndex = cart.products.findIndex((item) => item.id === id);
		const productData = products.find((item) => item.id === id);

		if (productIndex === -1 && productData) {
			setCart({
				products: [
					...cart.products,
					{
						id: productData.id,
						name: productData.name,
						price: productData.price,
						quantity: 1
					}
				],
				total: cart.total + 1
			});
		} else {
			const newCart = cart.products.map((item) => {
				if (item.id === id) {
					return {
						...item,
						quantity: (item.quantity || 0) + 1
					}
				}
				return item;
			});

			setCart({
				products: newCart,
				total: cart.total + 1
			});
		}
	}

  	return (
		<>
			<div className="container">
				<div className="products">
					<h1 className="product-title">Desserts</h1>
					<div className="product-list">
						{products.map((product) => (
							<div key={product.id} className="product">
								<img className="product-img" src={product.image.desktop} alt={product.name} width={250}/>
								<button className="product-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
								<p className="product-category">{product.category}</p>
								<h2 className="product-name">{product.name}</h2>
								<p className="product-price">${product.price}</p>
							</div>
						))}
					</div>
				</div>

				<Dialog 
					header="Header" 
					visible={visible} 
					style={{ width: '50vw' }} 
					onHide={() => {if (!visible) return; setVisible(false);}}
					modal={true}
					maskStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
					className="cart-dialog"
				>
					<p className="m-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</Dialog>

				<div className="cart">
					<h3 className="cart-title">Your Cart ({ cart.total })</h3>
					
					{cart.total == 0 && (
						<p className="cart-description">Your added items will appear here</p>
					)}

					{cart.total > 0 && (
						<div className="cart-list">
							{cart.products.map((product) => (
								<div key={product.id} className="cart-product">
									<div className="cart-first-line">
										<p className="cart-product-name">{product.name}</p>
									</div>
									<div className="cart-second-line">
										<p className="cart-product-quantity">{product.quantity}x</p>
										<p className="cart-product-price">${product.price}</p>
										<p className="cart-product-total">${product.price * (product.quantity ?? 0)}</p>
									</div>
									<hr className="cart-product-line" />
								</div>
							))}
							<button className="confirm-btn" onClick={() => setVisible(true)}>Confirm Order</button>
						</div>
					)}
				</div>
			</div>
		</>
	)
}