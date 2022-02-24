import { MostViewed } from 'components/shared/MostViewed/MostViewed';
import { ProductDetails } from 'components/Product/ProductDetails/ProductDetails';
import { useRouter } from 'next/router';

const { PublicLayout } = require('layout/PublicLayout');


const ProductPage = () => {
  const router=useRouter()
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
      label: 'Product',
      path: '/product',
    },
  ];
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Shop'>
      <ProductDetails />
      <MostViewed />
    </PublicLayout>
  );
};

export default ProductPage;
