function App() {
  return (
		<>
			<div className="products">
				<h1>Desserts</h1>
				<div className="products-grid">
					<div className="product">
						<span className="product-description">Waffle</span>
						<h4 className="product-name">Waffle with Berries</h4>
						<span className="product-price">6.50</span>
						Add to Cart
					</div>
					<div className="product">
						<span className="product-description">Crème Brûlée</span>
						<h4 className="product-name">Vanilla Bean Crème Brûlée</h4>
						<span className="product-price">7.00</span>
						Add to Cart
					</div>
					<div className="product">
						<span className="product-description">Macaron</span>
						<h4 className="product-name">Macaron Mix of Five</h4>
						<span className="product-price">8.00</span>
						Add to Cart
					</div>
					<div className="product">
						<span className="product-description">Tiramisu</span>
						<h4 className="product-name">Classic Tiramisu</h4>
						<span className="product-price">5.50</span>
						Add to Cart
					</div>
					<div className="product">
						<span className="product-description">Baklava</span>
						<h4 className="product-name">Pistachio Baklava</h4>
						<span className="product-price">4.00</span>
						Add to Cart
					</div>
					<div className="product">
						<span className="product-description">Pie</span>
						<h4 className="product-name">Lemon Meringue Pie</h4>
						<span className="product-price">5.00</span>
						Add to Cart
					</div>
					<div className="product">
						<span className="product-description">Cake</span>
						<h4 className="product-name">Red Velvet Cake</h4>
						<span className="product-price">4.50</span>
						Add to Cart
					</div>
					<div className="product">
						<span className="product-description">Brownie</span>
						<h4 className="product-name">Salted Caramel Brownie</h4>
						<span className="product-price">4.50</span>
						Add to Cart
					</div>
					<div className="product">
						<span className="product-description">Panna Cotta</span>
						<h4 className="product-name">Vanilla Panna Cotta</h4>
						<span className="product-price">6.50</span>
						Add to Cart
					</div>
				</div>
			</div>

			Your Cart (!-- Quantity --)
			Your added items will appear here
		</>
	)
}

export default App
