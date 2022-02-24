import { useState } from 'react';
import { CheckoutOrders } from './CheckoutOrder/CheckoutOrders';
import { CheckoutStep1 } from './CheckoutSteps/CheckoutStep1';
import { CheckoutStep2 } from './CheckoutSteps/CheckoutStep2';
import { CheckoutStep3 } from './CheckoutSteps/CheckoutStep3';


export const Checkout = ({checkoutData,cartData}) => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const detailBlocks = [
    {
      step: checkoutData.ch2,
      title: checkoutData.ch3,
      icon: 'icon-step1',
    },
    {
      step: checkoutData.ch4,
      title: checkoutData.ch5,
      icon: 'icon-step2',
    },
    {
      step: checkoutData.ch6,
      title:checkoutData.ch7,
      icon: 'icon-step3',
    },
  ];
  
  return (
    <>
      <div className='wrapper'>
        {/* <!-- BEGIN DETAIL MAIN BLOCK --> */}
        <div className='detail-block__items'>
          {detailBlocks.map((block, index) => (
            <div
              key={index}
              className={`detail-block__item ${
                activeStep <= index && 'detail-block__item-inactive'
              }`}
            >
              <div className='detail-block__item-icon'>
                <img
                  src={
                    activeStep <= index
                      ? '/assets/img/main-text-decor2.svg'
                      : '/assets/img/main-text-decor.svg'
                  }
                  className='js-img'
                  alt=''
                />
                <i className={block.icon}></i>
              </div>
              <div className='detail-block__item-info'>
                <h6>{block.step}</h6>
                {block.title}
              </div>
            </div>
          ))}
        </div>
        {/* <!-- DETAIL MAIN BLOCK EOF --> */}
      </div>

      {/* <!-- BEGIN CHECKOUT --> */}
      <div className={`checkout ${activeStep == 2 && 'checkout-step2'}`}>
        <div className='wrapper'>
          <div className='checkout-content'>
            {(() => {
              switch (activeStep) {
                case 1:
                  return <CheckoutStep1 onNext={handleNext}  checkoutData={checkoutData}/>;
                case 2:
                  return (
                    <CheckoutStep2 onNext={handleNext} onPrev={handlePrev} checkoutData={checkoutData} />
                  );
                case 3:
                  return <CheckoutStep3  checkoutData={checkoutData}/>;

                default:
                  return null;
              }
            })()}
            <div className='checkout-info'>
              <CheckoutOrders checkoutData={checkoutData} cartData={cartData} />
            </div>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
      </div>
      {/* <!-- CHECKOUT EOF   --> */}
    </>
  );
};
