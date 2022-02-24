import { Layout } from "layout/Layout";
import { PublicLayout } from "layout/PublicLayout";
import React from "react";
import { Category } from 'components/Categories/Category';
// import categoryData from '../../data/category/faceCategory'
  import { useRouter } from "next/router";
import {useTranslation} from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['home','face','body'])),
  },
})


const index = () => {
  let router =useRouter()
  let { t } = useTranslation();
  let ca1=t('home:hd-nav-1')
  let ca2=t('home:hd-nav-2')
  let ca3=t('home:hd-nav-3')
  let ca4=t('home:hd-nav-4')
  let ca5=t('home:hd-nav-5')
  let home=t('body:m2')
//Banner
let bn1=t('home:banner-1')
let bnBtn=t('home:banner-btn')

//Trending 
let titleOne=t('home:td-title-1')
let titleTow=t('home:td-title-2')
let td1=t('home:hd-nav-1')
let td2=ca2
let td3=ca3
let td4=t('home:td-header-1')
let td5=t('home:td-header-2')
let td6=t('home:td-price')
let tdp1=t('home:tdp1')
let tdp2=t('home:tdp2')
let tdp3=t('home:tdp3')
let tdp4=t('home:tdp4')
let tdp5=t('home:tdp5')
let tdp6=t('home:tdp6')
let tdp=t('home:dis-3')
//brand
let brand1=t('home:lo-brand-1')
let brand2=t('home:lo-brand-1')
let brand3=t('home:lo-brand-btn')

//discount
let dis11=t('home:dis-1')
let dis1=t('home:dis-2.1')
let dis2=t('home:dis-2.2')
let dis3=t('home:dis-2.3')
let dis4=t('home:dis-3')
let dis5=t('home:dis-btn')

//advantag
let ad1=t('home:ad-1')
let ad2=t('home:ad-2')
let ad3=t('home:ad-3')

//subscribe
let sub1=t('home:sub-1')
let sub2=t('home:sub-2')
let sub3=t('home:sub-3')
let sub4=t('home:sub-btn')

  
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


//catSection
let catS1=t('body:catS-1')
let catS2=t('body:catS-2')
let catS3=t('body:catS-3')
let catS4=t('body:catS-4')
let catS5=t('body:catS-5')
let catS6=t('body:catS-6')

  

let subNav={
  catS1,
  catS2,
  catS3,
}
  
let categoryData=[
  {
    "categoryId": "lips",
    "name": `${catS1}`,
    "image": "/assets/img/top-categories-img2.jpg",
    "path": `brandShop/makeup` ,
    "id":"12132klj2322321"  },
  {
    "categoryId": "lash",
    "name": `${catS2}`,
    "image": "/assets/img/top-categories-img2.jpg",
    "path":`brandShop/moisturisers`    },
  {
    "categoryId": "moisturizers",
    "name":`${catS3}`,
    "image": "/assets/img/top-categories-img2.jpg",
    "path":`brandShop/beauty`
  },
  {
    "categoryId": "makeup",
    "name":`${catS2}`,
    "image": "/assets/img/top-categories-img2.jpg",
    "path":`brandShop/moisturisers`
  },
  {
    "categoryId": "lotion",
    "name": `${catS3}`,
    "image": "/assets/img/top-categories-img2.jpg",
    "path":`brandShop/beauty`   },
  {
    "categoryId": "nail polish",
    "name":`${catS1}`,
    "image": "/assets/img/top-categories-img2.jpg",
    "path":`brandShop/makeup`   }
]

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
let headerData={ca1 ,ca2,ca3,ca4,home,ca5}



  let trendingData={
    titleOne,
    titleTow,
    td1,
    td2,
    td3,
    td4,
    td5,
    td6,
    tdp1,
    tdp2,
    tdp3,
    tdp4,
    tdp5,
    tdp6
  }
 //MostViewed
 let m1=t('body:m4')
 let m2=t('body:m5')
 let m3=t('body:m6')

 let mostViewedData={
   m1,
   m2,
   m3,

 }
  const breadcrumbsData = [
    {
      label: headerData.home,
      path: "/",
    },
    {
      label: headerData.ca5,
      path: "/brandShop",
    },
  ];

  return (
    <PublicLayout subNav={subNav} breadcrumb={breadcrumbsData} breadcrumbTitle={ca5} trendingData={trendingData} headerData={headerData} footerDta={footerDta}>
    <Category categoryData={categoryData} headerData={headerData} footerDta={footerDta} trendingData={trendingData} />
    </PublicLayout>
  );
};

export default index;
