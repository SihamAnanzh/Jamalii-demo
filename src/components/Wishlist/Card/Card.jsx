import Link from 'next/link';

export const Card = ({ wish ,wishlistData}) => {
  const { name, image, id, isStocked, productNumber, price } = wish;
  return (
    <>
      {/* <!-- BEGIN WISHLIST CARD --> */}
      <div className='cart-table__row'>
        <div className='cart-table__col'>
          <Link href={`/product/${id}`}>
            <a className='cart-table__img'>
              <img src={image} className='js-img' alt='' style={{
                paddingLeft:'5px'
              }} />
            </a>
          </Link>
          <div className='cart-table__info'>
            <Link href={`/product/${id}`}>
              <a className='title5'>{name}</a>
            </Link>
            <span className='cart-table__info-num'>SKU: {productNumber}</span>
          </div>
        </div>
        <div className='cart-table__col'>
          <span className='cart-table__price'>${price}</span>
        </div>
        <div className='cart-table__col'>
          {isStocked ? (
            <span className='wishlist-stock'>{wishlistData.w6}</span>
          ) : (
            <span className='wishlist-available'>{wishlistData.w10}</span>
          )}
        </div>
        <div className='cart-table__col'>
          <span className='cart-table__total'>
            <Link href={`/product/${id}`}>
              <a className='blog-item__link'>
              {wishlistData.w7}<i className='icon-arrow-md'></i>
              </a>
            </Link>
          </span>
        </div>
      </div>
      {/* <!-- WISHLIST CARD EOF--> */}
    </>
  );
};
