import Dropdown from 'react-dropdown';


export const CheckoutStep1 = ({ onNext,checkoutData }) => {
  const countries = [
    { label: `${checkoutData.check20}`, value: '1' },
    { label: `${checkoutData.check21}`, value: '2' },
  ];
  return (
    <>
      {/* <!-- BEING CHECKOUT STEP ONE -->  */}
      <div className='checkout-form'>
        <form onClick={(e) => e.preventDefault()}>
          <div className='checkout-form__item'>
            <h4>{checkoutData.check18}</h4>
            <div className='box-field'>
              <input
                type='text'
                className='form-control'
                placeholder={checkoutData.check19}
              />
            </div>
            <div className='box-field'>
              <input
                type='text'
                className='form-control'
                placeholder={checkoutData.ch9}
              />
            </div>
            <div className='box-field__row'>
              <div className='box-field'>
                <input
                  type='tel'
                  className='form-control'
                  placeholder={checkoutData.ch10}
                />
              </div>
              <div className='box-field'>
                <input
                  type='email'
                  className='form-control'
                  placeholder={checkoutData.ch11}
                />
              </div>
            </div>
          </div>
          <div className='checkout-form__item'>
            <h4>{checkoutData.ch12}</h4>

            <Dropdown
              options={countries}
              className='react-dropdown'
              onChange={(option) => console.log(option.value)}
              placeholder={checkoutData.check22}
            />
            <div className='box-field__row'>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder={checkoutData.ch14}
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder={checkoutData.ch15}
                />
              </div>
            </div>
            <div className='box-field__row'>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder={checkoutData.ch16}
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder={checkoutData.ch17}
                />
              </div>
            </div>
          </div>
          <div className='checkout-form__item'>
            <h4>{checkoutData.ch18}</h4>
            <div className='box-field box-field__textarea'>
              <textarea
                className='form-control'
                placeholder={checkoutData.ch19}
              ></textarea>
            </div>
            <label className='checkbox-box checkbox-box__sm'>
              <input type='checkbox' />
              <span className='checkmark'></span>
              {checkoutData.ch20}
            </label>
          </div>
          <div className='checkout-buttons'>
            {/* <button className='btn btn-grey btn-icon'>
              {' '}
              <i className='icon-arrow'></i> {checkoutData.ch6}
            </button> */}
            <button onClick={onNext} className='btn btn-icon btn-next'>
            {checkoutData.ch22} <i className='icon-arrow'></i>
            </button>
          </div>
        </form>
      </div>
      {/* <!-- CHECKOUT STEP ONE EOF -->  */}
    </>
  );
};
