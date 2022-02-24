import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
// import productData from 'data/product/product';

export const Trending = ({trendingData ,headerData}) => {

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
  const trendingProducts = [...productData];
  const [products, setProducts] = useState(trendingProducts);
  const [filterItem, setFilterItem] = useState('makeup');

  useEffect(() => {
    const newItems = trendingProducts.filter((pd) =>
      pd.filterItems.includes(filterItem)
    );
    setProducts(newItems);
  }, [filterItem]);

  const filterList = [
    // {
    //   name: trendingData.td1,
    //   value: 'makeup',
    // },
    // {
    //   name: trendingData.td2,
    //   value: 'spa',
    // },
    // {
    //   name: trendingData.td3,
    //   value: 'gift',
    // },
      {
    name:trendingData.td1,
    value:'spa'
    },
    {
      name:trendingData.td2,
      value:'perfume'
      },
    {
      name:trendingData.td3,
      value:'nail'
      },

   
 
  ];
  return (
    <>
      {/* <!-- BEGIN TRENDING --> */}
      <section className='trending'>
        <div className='trending-content'>
          <SectionTitle
            subTitle={trendingData.titleOne}
            title={trendingData.titleTow}
            body={trendingData.tdp}
          />
          <div className='tab-wrap trending-tabs'>
            <ul className='nav-tab-list tabs'>
              {filterList.map((item) => (
                <li
                  key={item.value}
                  onClick={() => setFilterItem(item.value)}
                     className={item.value === filterItem ? 'active' : ''}
                >
                  {item.name}
                </li>
              ))}
              {/* <li
              className='active'
              >
                {filterList[0].name}
              </li>
               <li
              
                >
                  {filterList[1].name}
                </li> <li
          
                >
                {filterList[2].name}
                </li> */}
            </ul>
            <div className='products-items'>
              <ProductsCarousel headerData={headerData} products={products} trendingData={trendingData} />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- TRENDING EOF   --> */}
    </>
  );
};
