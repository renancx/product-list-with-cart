import '../declaration.d.ts'
import './App.css'
import products from '../data.json'
import { useState } from 'react'
import { Dialog } from 'primereact/dialog';
import dialogHeader from '../assets/images/icon-order-confirmed.svg'
import cartIcon  from '../assets/images/icon-add-to-cart.svg'

interface Product {
	id: number;
	name: string;
	price: number;
	quantity?: number;
	image: {
		thumbnail: string;
		desktop: string;
	};
}

interface Cart {
	products: Product[];
	total: number;
}

export default function App() {
	// const [quantity, setQuantity] = useState(0);
	const [visible, setVisible] = useState(false);
	const [cart, setCart] = useState<Cart>({products: [], total: 0});

	const convertToCurrency = (value: number) => {
		return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	}

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
						quantity: 1,
						image: productData.image
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

	const handleConfirmOrder = () => {
		setCart({products: [], total: 0});
		setVisible(false);
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
								<button className="product-btn" onClick={() => handleAddToCart(product)}><img className="cart-product-img" src={cartIcon} /> <span className="add-to-cart">Add to Cart</span></button>
								<div className="product-overlay">
									<p className="product-category">{product.category}</p>
									<h2 className="product-name">{product.name}</h2>
									<p className="product-price">{convertToCurrency(product.price)}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<Dialog
					header={<img src={dialogHeader} alt="Order Confirmed" /> }
					visible={visible}
					onHide={() => {if (!visible) return; setVisible(false);}}
					modal={true}
					maskStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
					className="cart-dialog"
				>
					<h1 className="cart-dialog-title">Order Confirmed</h1>
					<p className="cart-dialog-description">We hope you enjoy your food</p>
					<ul className="cart-dialog-list">
						{cart.products.map((product) => (
							console.log(product),
							<li key={product.id} className="cart-dialog-product">
								<div className="cart-dialog-product-left">
									<img className="cart-product-img" src={product.image?.thumbnail} alt={product.name} width={70} height={70} />
									<div className="cart-dialog-product-info">
										<p className="cart-dialog-product-name">{product.name}</p>
										<div className="cart-dialog-product-values">
											<p className="cart-dialog-product-quantity">{product.quantity}x</p>
											<p className="cart-dialog-product-price">@ {convertToCurrency(product.price)}</p>
										</div>
									</div>
								</div>
								<p className="cart-dialog-product-total">{convertToCurrency(product.price * (product.quantity ?? 0))}</p>
							</li>
						))}
					</ul>
					<div className="cart-total">
						<p className="cart-dialog-total">Order Total:</p>
						<p className="cart-dialog-total-price">{convertToCurrency(cart.products.reduce((acc, product) => acc + (product.price * (product.quantity ?? 0)), 0))}</p>
					</div>

					<button className="confirm-btn" onClick={() => handleConfirmOrder() }>Start New Order</button>
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
										<p className="cart-product-price">{convertToCurrency(product.price)}</p>
										<p className="cart-product-total">{convertToCurrency(product.price * (product.quantity ?? 0))}</p>
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