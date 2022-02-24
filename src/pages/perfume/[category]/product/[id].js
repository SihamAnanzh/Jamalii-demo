import { MostViewed } from 'components/shared/MostViewed/MostViewed';
import { ProductDetails } from 'components/Product/ProductDetails/ProductDetails';
import { useRouter } from 'next/router';

import {useTranslation} from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { header } from 'data/data.header';

const { PublicLayout } = require('layout/PublicLayout');
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['home'])),
  },
})



const SingleProductPage = () => {
  const router =useRouter()
  let { t } = useTranslation();
  let ca1=t('home:hd-nav-1')
  let ca2=t('home:hd-nav-2')
  let ca3=t('home:hd-nav-3')
  let ca4=t('home:hd-nva-4')

  
//footer
let foot1=t('home:footer-1')
let foot2=t('home:footer-2')
let footAt1=t('home:footer-about')
let footAt2=t('home:footer-about-1')
let footAt3=t('home:footer-about-2')
let footAt4=t('home:footer-about-3')
let footBd1=t('home:footer-brand')
let footBd2=t('home:footer-brand-1')
let footBd3=t('home:footer-brand-2')
let footBd4=t('home:footer-brand-3')
let footBd5=t('home:footer-brand-4')
let footCt1=t('home:footer-contact')
let footCt2=t('home:footer-contact-phone-1')
let footCt3=t('home:footer-contact-phone-2')
let footCt4=t('home:footer-mail')
let footCt5=t('home:footer-cpy')
let footCt6=t('home:footer-contact-1')

let footerDta={
  foot1,
  foot2,
  footAt1,
  footAt2,
  footAt3,
  footAt4,
  footBd1,
  footBd2,
  footBd3,
  footBd4,
  footBd5,
  footCt1,
  footCt2,
  footCt3,
  footCt4,
  footCt5,
  footCt6
  }
  let headerData={ca1 ,ca2,ca3,ca4}

  //catSection
let catS1=t('face:catS-1')
let catS2=t('face:catS-2')
let catS3=t('face:catS-3')
let catS4=t('face:catS-4')
let catS5=t('face:catS-5')
let catS6=t('face:catS-6')

let subNav={
  catS1,
  catS2,
  catS3,
}

  const breadcrumbsData = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: headerData.ca3,
      path:`${router.query.category}`,
    },
    {
      label: MostViewed.m1,
      path: '#',
    },
  ];
  return (
    <PublicLayout  subNav={subNav}breadcrumb={breadcrumbsData} breadcrumbTitle='Shop'>
      <ProductDetails />
      <MostViewed additionalClass='product-viewed' />
    </PublicLayout>
  );
};

export default SingleProductPage;
