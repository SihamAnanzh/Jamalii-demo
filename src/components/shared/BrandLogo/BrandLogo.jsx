import brandData from 'data/brand/brandlogo';
import Link from 'next/link';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

export const BrandLogo = ({brandData:brand}) => {
  const brandLoges = [...brandData];
  return (
    <>
      {/* <!-- BEGIN LOGOS --> */}
      <div className="container">
        <div className='main-logos'>
          {brandLoges.map((logo, index) => (
            <Tippy content={brand.brand1} placement={'bottom'} className='toolTip'   
        > 
                <a key={index} href={logo.URL}>
              <img src={logo.logoSrc} className='js-img' alt=''/>
            </a> 
            </Tippy>
          
          ))}


        </div>
        <div className="brand-by-shop"
          style={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center',
            margin:'20px',
            marginTop: '-80px ',
            marginBottom:'60px'
          }}>
          <Link href='brandShop'>
            <a className='btn'>{brand.brand3}</a>
          </Link>
        </div>
      </div>



      {/* <!-- LOGOS EOF   --></img> */}
    </>
  );
};
