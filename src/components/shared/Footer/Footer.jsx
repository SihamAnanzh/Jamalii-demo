// import footerNavData from 'data/footer/footerNav';
import paymentMethodData from 'data/footer/payment';
import socialData from 'data/social';
import Link from 'next/link';
import { NavCol } from './NavCol/NavCol';


export const Footer = ({footerDta}) => {
  const footerLogo = '/assets/img/header-logo2.svg';
  const footerNavData=[
    {
      "title": `${footerDta.footAt1}`,
      "navLinks": [
        {
          "name":`${footerDta.footAt2}`,
          "path": "/about"
        },
      
        {
          "name": `${footerDta.footAt3}`,
          "path": "/blog"
        },
        {
          "name":`${footerDta.footAt4}`,
          "path": "/faq"
        }
   
      ] 
    },
    {
      "title": `${footerDta.footCt1}`,
      "navLinks": [
        {
          "name":`${footerDta.footCt2}`,
          "path": "/face"
        },
        {
          "name": `${footerDta.footCt3}`,
          "path": "/body"
        },
        {
          "name": `${footerDta.footCt4}`,
          "path": "/perfume"
        }
       
      ]
    },
    {
      "title": `${footerDta.footBd1}`,
      "navLinks": [
        {
          "name":`${footerDta.footBd2}`,
          "path":"brandShop/chanel"   
        },
        {
          "name": `${footerDta.footBd3}`,
  
          "path":"brandShop/maybellineNewYork" 
  
        },
       
        {
          "name":`${footerDta.footBd4}`,
          "path":"brandShop/dior" 
        },

  
      ]
    }
  ]

  
  const footerNav = [...footerNavData];
  const footerSocial = [...socialData];
  const paymentMethods = [...paymentMethodData];

  return (
    <>
      {/* <!-- BEGIN FOOTER --> */}
      <footer className='footer'>
        <div className='wrapper'>
          <div className='footer-top'>
            <div className='footer-top__social'>
              <span>{footerDta.foot1}</span>
              <ul>
                {footerSocial.map((social, index) => (
                  <li key={index}>
                    <a href={social.path}>
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
      
              </ul>
            </div>
            <div className='' >
              <Link href='/'>
                <a>
                  <img src={footerLogo} className='js-img' width="120px" alt='' />
                </a>
              </Link>
            </div>

            {/* Payment method */}
            <div className='footer-top__payments'>
              <span>{footerDta.foot2}</span>
              <ul>
             
                {/* {paymentMethods.map((payment, index) => (
                  <li key={index}>
                    <img src={payment.icon} className='js-img' alt='' />
                  </li>
                ))} */}
              </ul>
              <img style={{
                width:'200px',
                background:'#fff',
                zIndex:"10"
              }} src="../../assets\img\Payment-Logos.png" alt="" />
            </div>
          </div>
          <div className='footer-nav'>
            {/* Footer Nav */}
            {footerNav.map((nav, index) => (
              <NavCol nav={nav} key={index} />
            ))}
            {/* <div className='footer-nav__col'>
              <span className='footer-nav__col-title'>{footerDta.footCt1}</span>
              <ul>
                <li>
                  <i className='icon-map-pin'></i>{footerDta.footCt6}
                </li>
                <li>
                  <i className='icon-smartphone'></i>
                  <div className='footer-nav__col-phones' style={{
                    textAlign:'left'
                  }}>
                    <a href='tel:+13459971345' className='phone'>+965 26234462
</a>
                    <a href='tel:+13457464975'  className='phone'>+965 26235892</a>
                  </div>
                </li>
                <li>
                  <i className='icon-mail'></i>
                  <a href='mailto:info@jamalii.net'>{footerDta.footCt4}</a>
                </li>
              </ul>
            </div> */}
          </div>
          <div className='footer-copy'>
            <span>{footerDta.footCt5}</span>
          </div>
        </div>
      </footer>
      {/* <!-- FOOTER EOF   --> */}
    </>
  );
};
