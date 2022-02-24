import productData from 'data/product/product';
import { CartContext } from 'pages/_app';
import { useContext } from 'react';
import { Card } from './Card/Card';

export const CheckoutOrders = ({checkoutData,cartData}) => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0
  );

  return (
    <>
      <div className='checkout-order'>
        <h5>{checkoutData.ch21}</h5>
        {/* {cart.map((order) => (
          <Card key={order.id} order={order} />
        ))} */}
      </div>
      <div className='cart-bottom__total'>
        <div className='cart-bottom__total-goods'>
      {cartData.cart11}
          <span>${total.toFixed(2)}</span>
        </div>
        <div className='cart-bottom__total-promo'>
        {cartData.cart12}
          <span> {cartData.cart13}</span>
        </div>
        <div className='cart-bottom__total-delivery'>
        {checkoutData.ch12}{' '}
          <span className='cart-bottom__total-delivery-date'>
            (Aug 28,2020 at 11:30)
          </span>
          <span>$30</span>
        </div>
        <div className='cart-bottom__total-num'>
        {cartData.cart14}
          <span>${(total + 30).toFixed(2)}</span>
        </div>
      </div>
    </>
  );
};
