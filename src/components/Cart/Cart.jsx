import { Card } from './Card/Card';
import socialData from 'data/social';
import { CartContext } from 'pages/_app';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';

export const Cart = ({cartData}) => {
  const { cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const socialLinks = [...socialData];

  const total = cart.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0
  );

  const handleProductQuantity = (change, quantity, id) => {
    console.log(change, quantity, id);
    if (change === 'increment') {
      cart.find((item) => item.id === id).quantity = quantity + 1;
      setCount(count + 1);
    }
    if (change === 'decrement' && quantity > 1) {
      cart.find((item) => item.id === id).quantity = quantity - 1;
      setCount(count + 1);
    }
  };

  useEffect(() => {
    setCart(cart);
  }, [cart, count]);

  return (
    <>
      {/* <!-- BEGIN CART --> */}
      <div className='cart'>
        <div className='wrapper'>
          <div className='cart-table'>
            <div className='cart-table__box'>
              <div className='cart-table__row cart-table__row-head'>
                <div className='cart-table__col'>{cartData.cart2}</div>
                <div className='cart-table__col'>{cartData.cart3}</div>
                <div className='cart-table__col'>{cartData.cart4}</div>
                <div className='cart-table__col'>{cartData.cart5}</div>
              </div>

              {cart.map((cart) => (
                <Card style={{fontSize:"10px"}} className='cart-card-rtl'
                  onChangeQuantity={(change, quantity) =>
                    handleProductQuantity(change, quantity, cart.id)
                  }
                  key={cart.id}
                  cart={cart}
                />
              ))}
            </div>
          </div>
          <div className='cart-bottom'>
            <div className='cart-bottom__promo'>
              <form className='cart-bottom__promo-form'>
                <div className='box-field__row'>
                  <div className='box-field'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder={cartData.cart7}
                    />
                  </div>
                  <button type='submit' className='btn btn-grey'>
                   {cartData.cart6}
                  </button>
                </div>
              </form>
              <h6>{cartData.cart8}</h6>
              <p>
              {cartData.cart9}
              </p>
              <div className='contacts-info__social'>
                <span>{cartData.cart10}</span>
                <ul>
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a href={social.path} target='_blank'>
                        <i className={social.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='cart-bottom__total'>
              <div className='cart-bottom__total-goods'>
              {cartData.cart11}
                <span>${total.toFixed(2)}</span>
              </div>
              <div className='cart-bottom__total-promo'>
              {cartData.cart12}
                <span>{cartData.cart13}</span>
              </div>
              <div className='cart-bottom__total-num'>
              {cartData.cart14}
                <span>${total.toFixed(2)}</span>
              </div>
              <Link href='/checkout'>
                <a className='btn'>{cartData.cart15}</a>
              </Link>
            </div>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src='assets/img/promo-video__decor.jpg'
          alt=''
        />
      </div>
      {/* <!-- CART EOF   --> */}
    </>
  );
};
