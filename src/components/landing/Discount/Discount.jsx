import Link from 'next/link';

export const Discount = ({disData}) => {
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount js-img'
        style={{ backgroundImage: `url('/assets/img/discount-img.jpg')`  }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <span className='saint-text'>{disData.dis11}</span>
            <span className='main-text'>
            {disData.dis1} <span>{disData.dis2}</span> {disData.dis3}
            </span>
            <p>
            {disData.dis4}
            </p>

            <Link href='/face'>
              <a className='btn'> {disData.dis5}</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
