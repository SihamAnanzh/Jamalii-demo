// import productData from 'data/product/product';
import { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import socialData from 'data/social';
import { Reviews } from '../Reviews/Reviews';
import { ReviewFrom } from '../ReviewForm/ReviewFrom';
import { useRouter } from 'next/router';
import { CartContext } from 'pages/_app';

export const ProductDetails = ({productDetail,headerData ,footerDta,subNav ,trendingData }) => {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);

  
  const productData=[
    {
      "name": trendingData.tdp1,
      "oldPrice": "249.95",
      "price": "200.95",
      "id": "12132klj2322",
      "isSale": true,
      "isNew": false,
      "image": "/assets/img/Face/1.1.jpeg",
      "category": "makeup",
      "filterItems": ["nail", "skin", "makeup", "spa", "perfume", "hair"],
      "isStocked": true,
      "productNumber": "IN1203",
      "imageGallery": [
        "/assets/img//Face/1.1.jpeg",
        "/assets/img//Face/1.1.jpeg",
        "/assets/img//Face/1.1.jpeg",
      ],
      "colors": [
        "#FCEDEA",
        "#FEE1DB",
        "#FFD9D1",
        "#FDC5B9",
        "#FDB7A8",
        "#FFA08A"
      ],
      "content": "Universal foundation masks skin imperfections and gives it a matte finish, remaining completely invisible on the face. The foundation is suitable for any skin type. Thanks to a unique combination of pigments, the foundation adapts perfectly to even the smallest features of skin tone, creating an even and natural tone",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi beatae provident ipsum omnis dolor sapiente maiores reiciendis exercitationem earum deleniti, reprehenderit iste ipsa saepe. Consectetur non et excepturi molestias esse?",
      "reviews": [
        {
          "author": {
            "image": "/assets/img/face/1.1.jpg",
            "name": "Melissa Jones"
          },
          "reviewDate": "July 23, 2020",
          "rating": 4,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you"
        },
        {
          "author": {
            "image": "/assets/img/face/2.jpg",
            "name": "Amanda Clement"
          },
          "reviewDate": "June 15, 2020",
          "rating": 5,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you). I am grateful to the employees of BeShop for the quality products."
        },
        {
          "author": {
            "image": "/assets/img/face/4.jpg",
            "name": "Steve Gentley"
          },
          "reviewDate": "July 05, 2020",
          "rating": 3,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you"
        }
      ]
    },
    {
      "name": trendingData.tdp2,
      "oldPrice": "149.50",
      "price": "100.90",
      "id": "12132klj1213",
      "isSale": true,
      "isNew": false,
      "image": "/assets/img/Face/5.jpeg",
      "category": "spa",
      "filterItems": ["makeup", "spa", "perfume", "hair"],
  
      "isStocked": true,
      "productNumber": "IN1203",
  
      "imageGallery": [
        "/assets/img/Face/5.jpeg",
        "/assets/img/Face/5.jpeg",  
        "/assets/img/Face/5.jpeg",
      ],
      "colors": [
        "#FCEDEA",
        "#FEE1DB",
        "#FFD9D1",
        "#FDC5B9",
        "#FDB7A8",
        "#FFA08A"
      ],
      "content": "Universal foundation masks skin imperfections and gives it a matte finish, remaining completely invisible on the face. The foundation is suitable for any skin type. Thanks to a unique combination of pigments, the foundation adapts perfectly to even the smallest features of skin tone, creating an even and natural tone",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi beatae provident ipsum omnis dolor sapiente maiores reiciendis exercitationem earum deleniti, reprehenderit iste ipsa saepe. Consectetur non et excepturi molestias esse?",
      "reviews": [
        {
          "author": {
            "image": "/assets/img/face/5.jpg",
            "name": "Melissa Jones"
          },
          "reviewDate": "July 23, 2020",
          "rating": 4,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you"
        },
        {
          "author": {
            "image": "/assets/img/face/1.jpg",
            "name": "Amanda Clement"
          },
          "reviewDate": "June 15, 2020",
          "rating": 5,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you). I am grateful to the employees of BeShop for the quality products."
        },
        {
          "author": {
            "image": "/assets/img/face/6.jpg",
            "name": "Steve Gentley"
          },
          "reviewDate": "July 05, 2020",
          "rating": 3,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you"
        }
      ]
    },
    {
      "name": trendingData.tdp3,
      "oldPrice": "549.95",
      "price": "200.95",
      "id": "12132klj232453",
      "isSale": false,
      "isNew": true,
      "image": "/assets/img/Face/tony.jpg",
      "category": "nail",
      "filterItems": ["nail", "skin", "makeup", "spa"],
      "isStocked": true,
      "productNumber": "IN1203",
      "imageGallery": [
        "/assets/img/Face/tony.jpg",
        "/assets/img/Face/tony.jpg",
         "/assets/img/Face/tony.jpg",
      ],
      "colors": [
        "#FCEDEA",
        "#FEE1DB",
        "#FFD9D1",
        "#FDC5B9",
        "#FDB7A8",
        "#FFA08A"
      ],
      "content": "Universal foundation masks skin imperfections and gives it a matte finish, remaining completely invisible on the face. The foundation is suitable for any skin type. Thanks to a unique combination of pigments, the foundation adapts perfectly to even the smallest features of skin tone, creating an even and natural tone",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi beatae provident ipsum omnis dolor sapiente maiores reiciendis exercitationem earum deleniti, reprehenderit iste ipsa saepe. Consectetur non et excepturi molestias esse?",
      "reviews": [
        {
          "author": {
            "image": "/assets/img/comment-author1.jpg",
            "name": "Melissa Jones"
          },
          "reviewDate": "July 23, 2020",
          "rating": 4,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you"
        },
        {
          "author": {
            "image": "/assets/img/comment-author3.jpg",
            "name": "Amanda Clement"
          },
          "reviewDate": "June 15, 2020",
          "rating": 5,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you). I am grateful to the employees of BeShop for the quality products."
        },
        {
          "author": {
            "image": "/assets/img/comment-author2.jpg",
            "name": "Steve Gentley"
          },
          "reviewDate": "July 05, 2020",
          "rating": 5,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you"
        }
      ]
    },
    {
      "name": trendingData.tdp4,
      "oldPrice": "249.95",
      "price": "200.95",
      "id": "12132klj2121212",
      "isSale": true,
      "isNew": false,
      "image": "/assets/img/Face/spary.jpeg",
      "category": "hair",
      "filterItems": ["nail", "makeup", "perfume", "hair"],
      "isStocked": true,
      "productNumber": "IN1203",
      "imageGallery": [
        "/assets/img/Face/spary.jpeg",
        "/assets/img/Face/spary.jpeg",
        "/assets/img/Face/spary.jpeg",

      ],
      "colors": [
        "#FCEDEA",
        "#FEE1DB",
        "#FFD9D1",
        "#FDC5B9",
        "#FDB7A8",
        "#FFA08A"
      ],
      "content": "Universal foundation masks skin imperfections and gives it a matte finish, remaining completely invisible on the face. The foundation is suitable for any skin type. Thanks to a unique combination of pigments, the foundation adapts perfectly to even the smallest features of skin tone, creating an even and natural tone",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi beatae provident ipsum omnis dolor sapiente maiores reiciendis exercitationem earum deleniti, reprehenderit iste ipsa saepe. Consectetur non et excepturi molestias esse?",
      "reviews": [
        {
          "author": {
            "image": "/assets/img/comment-author1.jpg",
            "name": "Melissa Jones"
          },
          "reviewDate": "July 23, 2020",
          "rating": 4,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you"
        },
        {
          "author": {
            "image": "/assets/img/comment-author3.jpg",
            "name": "Amanda Clement"
          },
          "reviewDate": "June 15, 2020",
          "rating": 5,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you). I am grateful to the employees of BeShop for the quality products."
        },
        {
          "author": {
            "image": "/assets/img/comment-author2.jpg",
            "name": "Steve Gentley"
          },
          "reviewDate": "July 05, 2020",
          "rating": 5,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you"
        }
      ]
    },
    {
      "name": trendingData.tdp5,
      "oldPrice": "249.95",
      "price": "200.95",
      "id": "12132klj24444",
      "isSale": true,
      "isNew": false,
      "image": "/assets/img/Face/patches.jpg",
      "category": "perfume",
      "filterItems": ["makeup", "spa", "perfume", "hair"],
      "isStocked": true,
      "productNumber": "IN1203",
      "imageGallery": [
        "/assets/img/Face/patches.jpg",
        "/assets/img/Face/patches.jpg",   
             "/assets/img/Face/patches.jpg",
      ],
      "colors": [
        "#FCEDEA",
        "#FEE1DB",
        "#FFD9D1",
        "#FDC5B9",
        "#FDB7A8",
        "#FFA08A"
      ],
      "content": "Universal foundation masks skin imperfections and gives it a matte finish, remaining completely invisible on the face. The foundation is suitable for any skin type. Thanks to a unique combination of pigments, the foundation adapts perfectly to even the smallest features of skin tone, creating an even and natural tone",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi beatae provident ipsum omnis dolor sapiente maiores reiciendis exercitationem earum deleniti, reprehenderit iste ipsa saepe. Consectetur non et excepturi molestias esse?",
      "reviews": [
        {
          "author": {
            "image": "/assets/img/comment-author1.jpg",
            "name": "Melissa Jones"
          },
          "reviewDate": "July 23, 2020",
          "rating": 4,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you"
        },
        {
          "author": {
            "image": "/assets/img/comment-author3.jpg",
            "name": "Amanda Clement"
          },
          "reviewDate": "June 15, 2020",
          "rating": 5,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you). I am grateful to the employees of BeShop for the quality products."
        },
        {
          "author": {
            "image": "/assets/img/comment-author2.jpg",
            "name": "Steve Gentley"
          },
          "reviewDate": "July 05, 2020",
          "rating": 5,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you"
        }
      ]
    },
    {
      "name": trendingData.tdp6,
      "oldPrice": "249.95",
      "price": "200.95",
      "id": "12132klj2322321",
      "isSale": true,
      "isNew": true,
      "image": "/assets/img/Face/Detox.jpeg",
      "category": "skin",
      "filterItems": ["makeup", "skin", "perfume", "hair"],
      "isStocked": true,
      "productNumber": "IN1203",
      "imageGallery": [
        "/assets/img/Face/Detox.jpeg",
        "/assets/img/Face/Detox.jpeg",
      ],
      "colors": [
        "#FCEDEA",
        "#FEE1DB",
        "#FFD9D1",
        "#FDC5B9",
        "#FDB7A8",
        "#FFA08A"
      ],
      "content": "Universal foundation masks skin imperfections and gives it a matte finish, remaining completely invisible on the face. The foundation is suitable for any skin type. Thanks to a unique combination of pigments, the foundation adapts perfectly to even the smallest features of skin tone, creating an even and natural tone",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi beatae provident ipsum omnis dolor sapiente maiores reiciendis exercitationem earum deleniti, reprehenderit iste ipsa saepe. Consectetur non et excepturi molestias esse?",
      "reviews": [
        {
          "author": {
            "image": "/assets/img/comment-author1.jpg",
            "name": "Melissa Jones"
          },
          "reviewDate": "July 23, 2020",
          "rating": 4,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you"
        },
        {
          "author": {
            "image": "/assets/img/comment-author3.jpg",
            "name": "Amanda Clement"
          },
          "reviewDate": "June 15, 2020",
          "rating": 5,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you). I am grateful to the employees of BeShop for the quality products."
        },
        {
          "author": {
            "image": "/assets/img/comment-author2.jpg",
            "name": "Steve Gentley"
          },
          "reviewDate": "July 05, 2020",
          "rating": 5,
          "content": "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you"
        }
      ]
    }
  
  ]
  const socialLinks = [...socialData];
  const products = [...productData];
  const [product, setProduct] = useState(null);
  const [addedInCart, setAddedInCart] = useState(false);


  useEffect(() => {
    if (router.query.id) {
      const data = products.find((pd) => pd.id === router.query.id);
      setProduct(data);
    }
  }, [router.query.id]);

  useEffect(() => {
    if (product) {
      setAddedInCart(Boolean(cart?.find((pd) => pd.id === product.id)));
    }
  }, [product, cart]);

  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState(2);
  const [activeColor, setActiveColor] = useState(2);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const handleAddToCart = () => {
    const newProduct = { ...product, quantity: quantity };
    setCart([...cart, newProduct]);
  };

  if (!product) return <></>;
  return (
    <>
      {/* <!-- BEGIN PRODUCT --> */}
      <div className='product'>
        <div className='wrapper'>
          <div className='product-content'>
            {/* <!-- Product Main Slider --> */}
            <div className='product-slider'>
              <div className='product-slider__main'>
                <Slider
                  fade={true}
                  asNavFor={nav2}
                  arrows={false}
                  lazyLoad={true}
                  ref={(slider1) => setNav1(slider1)}
                >
                  {product.imageGallery.map((img, index) => (
                    <div key={index} className='product-slider__main-item'>
                      <div className='products-item__type'>
                        {product.isSale && (
                          <span className='products-item__sale'>{trendingData.td4}</span>
                        )}
                        {product.isNew && (
                          <span className='products-item__new'>{trendingData.td5}</span>
                        )}
                      </div>
                      <img src={img} alt='product' />
                    </div>
                  ))}
                </Slider>
              </div>

              {/* <!-- Product Slide Nav --> */}
              <div className='product-slider__nav'>
                <Slider
                  arrows={false}
                  asNavFor={nav1}
                  ref={(slider2) => setNav2(slider2)}
                  slidesToShow={4}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  {product.imageGallery.map((img, index) => (
                    <div key={index} className='product-slider__nav-item'>
                      <img src={img} alt='product' />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className='product-info'>
              <h3>{product.name}</h3>
              {product.isStocked ? (
                <span className='product-stock'>{productDetail.pd1}</span>
              ) : (
                ''
              )}

              <span className='product-num'>{productDetail.pd2}</span>
              {product.oldPrice ? (
                <span className='product-price'>
                  <span>${product.oldPrice}</span>${product.price}
                </span>
              ) : (
                <span className='product-price'>${product.price}</span>
              )}
              <p>{productDetail.pd3}</p>

              {/* <!-- Social Share Link --> */}
              <div className='contacts-info__social'>
                <span>{footerDta.foot1}</span>
                <ul>
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a href={social.path}>
                        <i className={social.icon ? social.icon : ''}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <!-- Product Color info--> */}
              <div className='product-options'>
                <div className='product-info__color'>
                  <span>{productDetail.pd4}:</span>
                  <ul>
                    {product?.colors.map((color, index) => (
                      <li
                        onClick={() => setActiveColor(index)}
                        className={activeColor === index ? 'active' : ''}
                        key={index}
                        style={{ backgroundColor: color }}
                      ></li>
                    ))}
                  </ul>
                </div>

                {/* <!-- Order Item counter --> */}
                <div className='product-info__quantity'>
                  <span className='product-info__quantity-title'>
                  {productDetail.pd5}
                  </span>
                  <div className='counter-box'>
                    <span
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
                      className='counter-link counter-link__prev'
                    >
                      <i className='icon-arrow'></i>
                    </span>
                    <input
                      type='text'
                      className='counter-input'
                      disabled
                      value={quantity}
                    />
                    <span
                      onClick={() => setQuantity(quantity + 1)}
                      className='counter-link counter-link__next'
                    >
                      <i className='icon-arrow'></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className='product-buttons'>
                <button
                  disabled={addedInCart}
                  onClick={() => handleAddToCart()}
                  className='btn btn-icon'
                >
                  <i className='icon-cart' style={{
                    paddingLeft:'5px'
                  }}></i> {productDetail.pd6}
                </button>
                <button className='btn btn-grey btn-icon'>
                  <i className='icon-heart'  style={{
                    paddingLeft:'5px'
                  }}></i> {productDetail.pd7}
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Product Details Tab --> */}
          <div className='product-detail'>
            <div className='tab-wrap product-detail-tabs'>
              <ul className='nav-tab-list tabs pd-tab'>
                <li
                  className={tab === 1 ? 'active' : ''}
                  onClick={() => setTab(1)}
                >
                  {productDetail.pd8}
                </li>
                <li
                  className={tab === 2 ? 'active' : ''}
                  onClick={() => setTab(2)}
                >
                  {productDetail.pd9}
                </li>
              </ul>
              <div className='box-tab-cont'>
                {/* <!-- Product description --> */}
                {tab === 1 && (
                  <div className='tab-cont'>
                    <p>{product.description}</p>
                    <p>{product.description}</p>
                  </div>
                )}

               
              </div>
            </div>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
      </div>
      {/* <!-- PRODUCT EOF   --> */}
    </>
  );
};
