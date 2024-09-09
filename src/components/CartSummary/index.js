// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      const itemsCount = cartList.length

      cartList.forEach(eachProduct => {
        const cost = eachProduct.quantity * eachProduct.price
        total += cost
      })

      return (
        <div className="order-summary-cont">
          <div className="order-summary">
            <h1 className="summary-title">
              order Total:{' '}
              <span className="total-amount">{`Rs ${total}/-`}</span>
            </h1>
            <p className="order-desc">{itemsCount} Items in cart</p>
            <button type="button" className="checkout-btn-large-btn">
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-btn-mobile-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
