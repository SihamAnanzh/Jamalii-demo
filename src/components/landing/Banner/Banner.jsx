import Link from 'next/link';

export const Banner = ({bannerdata}) => {
  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div className='main-block load-bg'>
        <div className='wrapper'>
          <div className='main-block__content'>
            {/* <span className='saint-text'>Professional</span> */}
            {/* <h1 className='main-text'>Beauty &amp; Care</h1> */}
            <p style={{color:'black',marginTop:'60px'}}>
            {bannerdata.bn1}
            </p>

            <Link href='/face'>
              <a className='btn'>{bannerdata.bnBtn}</a>
            </Link>
          </div>
        </div>
        <img
          className='main-block__decor'
          src='/assets/img/main-block-decor.png'
          alt=''
        />
      </div>
      {/* <!-- MAIN BLOCK EOF --> */}
    </>
  );
};
