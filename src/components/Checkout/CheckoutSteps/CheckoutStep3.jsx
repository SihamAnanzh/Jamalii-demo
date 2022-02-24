export const CheckoutStep3 = ({checkoutData}) => {
  return (
    <>
      {/* <!-- BEING CHECKOUT STEP Three -->  */}
      <div className='checkout-purchase checkout-form'>
        <h4>
        {checkoutData.check10}
        </h4>
        <p>
        {checkoutData.check11}
        </p>
        <ul className='checkout-purchase__list'>
          <li>
            <span>{checkoutData.check12}</span>B-125724_75
          </li>
          <li>
            <span>{checkoutData.check13}</span>Awaiting payment
          </li>
          <li>
            <span>{checkoutData.check14}</span>22.09.2020
          </li>
          <li>
            <span>{checkoutData.check15}</span>20.09.2020
          </li>
        </ul>
        <a href='#' className='checkout-purchase__link'>
        {checkoutData.check16}
        </a>
      </div>
      {/* <!-- CHECKOUT STEP TWO EOF -->  */}
    </>
  );
};
