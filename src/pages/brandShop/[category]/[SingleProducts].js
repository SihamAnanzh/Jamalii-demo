import { MostViewed } from 'components/shared/MostViewed/MostViewed';
import { ProductDetails } from 'components/Product/ProductDetails/ProductDetails';
import { useRouter } from 'next/router';

import products from '../../../data/product/product'
import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
const { PublicLayout } = require('layout/PublicLayout');


const SingleProductPage = () => {
  const router =useRouter()
  const breadcrumbsData = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: router.query.category,
      path:`${router.query.category}`,
    },
    {
      label: router.query.SingleProduct,
      path:`${router.query.SingleProduct}`,
    },
  ];
 

    return (
      <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Shop'>
    </PublicLayout>
    );

};

export default SingleProductPage;
