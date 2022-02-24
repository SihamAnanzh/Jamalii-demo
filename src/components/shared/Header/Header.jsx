import { header } from 'data/data.header';
import Link from 'next/link';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Nav } from './Nav/Nav';
import { navItem } from 'data/data.header';
import { CartContext } from 'pages/_app';
import { useRouter } from 'next/router';

export const Header = ({ headerData, subNav }) => {
  const [flag, setFlag] = useState('../../../assets/img/Eflag.png')

  const router = useRouter()
  const { cart } = useContext(CartContext);
  const [promo, setPromo] = useState(true);
  const [fixedNav, setFixedNav] = useState(false);
  const [width, setWidth] = useState('170px')
  const [height, seHeight] = useState("70px")

  const showMenu = () => {
    let menu = document.getElementById('header-box')
    let content = document.getElementById('header-content')
    menu.classList.toggle('active')
    content.classList.toggle('active')

    console.log(menu);

  }
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };

  });

  const isSticky = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 10) {
      setFixedNav(true);
      setWidth('140px')
      seHeight('50px')
    } else {
      setFixedNav(false);
      setWidth('170px')
      seHeight('70px')
    }
  };
  return (
    <>
      {/* <!-- BEGIN HEADER --> */}
      <header className='header'>
        {/* {promo && (
          <div className='header-top'>
            <span>30% OFF ON ALL PRODUCTS ENTER CODE: jamalii2022</span>
            <i
              onClick={() => setPromo(false)}
              className='header-top-close js-header-top-close icon-close'
            ></i>
          </div>
        )} */}
        <div className={`header-content ${fixedNav ? 'fixed' : ''}`} id="header-content" >
          <div className='header-logo'  >
            <Link href='/'>
              <a>
                <img src={header.logo} alt='' width={width} height={height} />
              </a>
            </Link>
          </div>
          <div className='header-box' id="header-box">
            {/* Nav */}
            <Nav headerData={headerData} subNav={subNav} />
            {/* header options */}
            <ul className='header-options'>
              <li>
                <Link href='/'>
                  <a>
                    <i className='icon-search'></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/profile'>
                  <a>
                    <i className='icon-user'></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/wishlist'>
                  <a>
                    <i className='icon-heart'></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/cart'>
                  <a>
                    <i className='icon-cart'></i>
                    <span>{cart.length ?? '0'}</span>
                  </a>
                </Link>
              </li>

              {router.locales.filter(locale => locale !== router.locale).map((locale) => (
                <li key={locale} onClick={() => setTimeout(() => window.location.reload()), 100}>
                  <Link href={router.asPath} locale={locale}
                  >
                    <a style={{ color: "#222",fontFamily:locale=="AR" && 'DinBold' }} >{locale == "AR" ? "العربية" : "English"}</a>
                  </Link>
                </li>))
              }

              {/* <span style={{
              display:'flex'
            }}>
              {router.locales.map((locale) => (
            <li key={locale}  onClick={e=>window.location.reload()}>
              <Link href={router.asPath} locale={locale} >
                <a>{locale}</a>
              </Link>
            </li>

          ))
          } 
              </span> */}
            </ul>

          </div>

          <div className='btn-menu js-btn-menu'
            onClick={showMenu}>
            {[1, 2, 3].map((i) => (
              <span key={i}>&nbsp;</span>
            ))}
          </div>
        </div>
      </header>

      {/* <!-- HEADER EOF   --> */}
    </>
  );
}

