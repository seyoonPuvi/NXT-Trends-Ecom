import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0

      const onRemoveAllItems = () => removeAllCartItems()

      const onRenderSummary = () => {
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
              <button type="button" className="checkout-btn">
                Checkout
              </button>
            </div>
          </div>
        )
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="remove-all-btn"
                  onClick={onRemoveAllItems}
                >
                  Remove All
                </button>
                <CartListView />
                <CartSummary />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
