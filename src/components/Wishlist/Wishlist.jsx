import productData from 'data/product/product';
import { Card } from './Card/Card';
import Link from 'next/link';
import { useState } from 'react';

export const Wishlist = ({wishlistData,trendingData}) => {
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
        "/assets/img/face/1.1.jpg",
        "/assets/img/face/3.jpeg",
        "/assets/img/face/2.jpg",
        "/assets/img/face/4.jpg",
        "/assets/img/face/5.jpg"
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
        "/assets/img/product-img1.jpg",
        "/assets/img/product-img6.jpg",
        "/assets/img/product-img7.jpg",
        "/assets/img/product-img8.jpg",
        "/assets/img/product-img9.jpg"
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
        "/assets/img/product-img3.jpg",
        "/assets/img/product-img6.jpg",
        "/assets/img/product-img7.jpg",
        "/assets/img/product-img8.jpg",
        "/assets/img/product-img9.jpg"
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
        "/assets/img/product-img4.jpg",
        "/assets/img/product-img6.jpg",
        "/assets/img/product-img7.jpg",
        "/assets/img/product-img8.jpg",
        "/assets/img/product-img9.jpg"
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
        "/assets/img/product-img5.jpg",
        "/assets/img/product-img6.jpg",
        "/assets/img/product-img7.jpg",
        "/assets/img/product-img8.jpg",
        "/assets/img/product-img9.jpg"
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
        "/assets/img/product-img6.jpg",
        "/assets/img/product-img5.jpg",
        "/assets/img/product-img7.jpg",
        "/assets/img/product-img8.jpg",
        "/assets/img/product-img9.jpg"
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
  const wishItems = [...productData].slice(0, 2);
  wishItems[1].isStocked = false;

  return (
    <>
      {/* <!-- BEGIN WISHLIST --> */}
      <div className='wishlist'>
        <div className='wrapper'>
          <div className='cart-table'>
            <div className='cart-table__box'>
              <div className='cart-table__row cart-table__row-head'>
                <div className='cart-table__col'>{wishlistData.w2}</div>
                <div className='cart-table__col'>{wishlistData.w3}</div>
                <div className='cart-table__col'>{wishlistData.w4}</div>
                <div className='cart-table__col'>{wishlistData.w5}</div>
              </div>

              {wishItems.map((wish) => (
                <Card key={wish.id} wish={wish} wishlistData={wishlistData} />
              ))}
            </div>
          </div>
          <div className='wishlist-buttons'>
            <a href='#' className='btn btn-grey' >
            {wishlistData.w9}
            </a>
            <Link href='/shop'>
              <a className='btn'>{wishlistData.w8}</a>
            </Link>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          data-src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
      </div>
      {/* <!-- WISHLIST EOF   --> */}
    </>
  );
};
