import { useState } from 'react';

export const CheckoutStep2 = ({ onNext, onPrev,checkoutData }) => {
  const [payment, setPayment] = useState(checkoutData.check8);
  return (
    <>
      {/* <!-- BEING CHECKOUT STEP TWO -->  */}
      <div className='checkout-payment checkout-form'>
        <h4>{checkoutData.check7}</h4>
        <div
          className={`checkout-payment__item ${
            payment === 'credit-card' && 'active'
          }`}
        >
          <div className='checkout-payment__item-head'>
            <label
              onChange={() => setPayment('credit-card')}
              className='radio-box'
            >
                {checkoutData.check8}
              <input
                type='radio'
                checked={payment === 'credit-card'}
                name='radio'
              />
              <span className='checkmark'></span>
              <span className='radio-box__info'>
                <i className='icon-info'></i>
                <span className='radio-box__info-content'>
                {checkoutData.check4}
                </span>
              </span>
            </label>
          </div>
          <div className='checkout-payment__item-content'>
            <div className='box-field'>
              <span>{checkoutData.check1}</span>
              <input
                type='text'
                className='form-control'
                placeholder='xxxx xxxx xxxx xxxx'
                maxlength='16'
              />
            </div>
            <div className='box-field__row'>
              <div className='box-field'>
                <span>{checkoutData.check9}</span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='mm'
                  maxlength='2'
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='yy'
                  maxlength='2'
                />
              </div>
              <div className='box-field'>
                <span>{checkoutData.check3}</span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='CVV'
                  maxlength='3'
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`checkout-payment__item ${
            payment === 'paypal' && 'active'
          }`}
        >
          <div className='checkout-payment__item-head'>
            <label onClick={() => setPayment('paypal')} className='radio-box'>
              PayPal
              <input type='radio' checked={payment === 'paypal'} name='radio' />
              <span className='checkmark'></span>
              <span className='radio-box__info'>
                <i className='icon-info'></i>
                <span className='radio-box__info-content'>
                {checkoutData.check4}
                </span>
              </span>
            </label>
          </div>
          <div className='checkout-payment__item-content'>
            <div className='box-field'>
              <span>{checkoutData.check9}</span>
              <input
                type='text'
                className='form-control'
                placeholder='xxxx xxxx xxxx xxxx'
                maxlength='16'
              />
            </div>
            <div className='box-field__row'>
              <div className='box-field'>
                <span>{checkoutData.check2}</span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='mm'
                  maxlength='2'
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='yy'
                  maxlength='2'
                />
              </div>
              <div className='box-field'>
                <span>{checkoutData.check3}</span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='CVV'
                  maxlength='3'
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`checkout-payment__item ${payment === 'cash' && 'active'}`}
        >
          <div className='checkout-payment__item-head'>
            <label onClick={() => setPayment('cash')} className='radio-box'>
            {checkoutData.check5}
              <input type='radio' checked={payment === 'cash'} name='radio' />
              <span className='checkmark'></span>
              <span className='radio-box__info'>
                <i className='icon-info'></i>
                <span className='radio-box__info-content'>
                {checkoutData.check4}
                </span>
              </span>
            </label>
          </div>
          <div className='checkout-payment__item-content'>
            <div className='box-field'>
              <span>{checkoutData.check9}</span>
              <input
                type='text'
                className='form-control'
                placeholder='xxxx xxxx xxxx xxxx'
                maxlength='16'
              />
            </div>
            <div className='box-field__row'>
              <div className='box-field'>
                <span>{checkoutData.check2}</span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='mm'
                  maxlength='2'
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='yy'
                  maxlength='2'
                />
              </div>
              <div className='box-field'>
                <span>{checkoutData.check3}</span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='CVV'
                  maxlength='3'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='checkout-buttons'>
          <button onClick={onPrev} className='btn btn-grey btn-icon'>
            <i className='icon-arrow'></i>{checkoutData.check6}
          </button>
          <button onClick={onNext} className='btn btn-icon btn-next'>
          {checkoutData.ch22} <i className='icon-arrow'></i>
          </button>
        </div>
      </div>
      {/* <!-- CHECKOUT STEP TWO EOF -->  */}
    </>
  );
};
