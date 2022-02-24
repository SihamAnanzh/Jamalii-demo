import { Checkout } from "components/Checkout/Checkout";
import { PublicLayout } from "layout/PublicLayout";

import { useRouter } from "next/router";
import {useTranslation} from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['home','face','body','cart','wishlist','checkout'])),
  },
})

const CheckoutPage = () => {
  let router =useRouter()
  let { t } = useTranslation();
  
  let ca1=t('home:hd-nav-1')
  let ca2=t('home:hd-nav-2')
  let ca3=t('home:hd-nav-3')
  let ca4=t('home:hd-nva-4')
  let home =t('body:m2')
  
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
  
  let headerData={ca1 ,ca2,ca3,ca4}
  let bannerdata={
    bn1,
    bnBtn
  }
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
  let brandData={
    brand1,
    brand2,
    brand3
  }
  
  let disData={
    dis11,
    dis1,
    dis2,
    dis3,
    dis4,
    dis5
  }
  
  let adData={
    ad1,
    ad2,
    ad3,
  
  }
  
  let subData={
    sub1,
    sub2,
    sub3,
    sub4
  }
  
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
  //wishlist
  let w1=t('wishlist:w-1')
  let w2=t('wishlist:w-2')
  let w3=t('wishlist:w-3')
  let w4=t('wishlist:w-4')
  let w5=t('wishlist:w-5')
  let w6=t('wishlist:w-6')
  let w7=t('wishlist:w-7')
  let w8=t('wishlist:w-8')
  let w9=t('wishlist:w-9')
  let w10=t('wishlist:w-10')
  let wishlistData={
    w1,
    w2,
    w3,
    w4,
    w5,
    w6,
    w6,
    w7,
    w8,
    w9,
    w10
   
  }
    //cart 
    let cart1=t('cart:cart-1')
    let cart2=t('cart:cart-2')
    let cart3=t('cart:cart-3')
    let cart4=t('cart:cart-4')
    let cart5=t('cart:cart-5')
    let cart6=t('cart:cart-6')
    let cart7=t('cart:cart-7')
    let cart8=t('cart:cart-8')
    let cart9=t('cart:cart-9')
    let cart10=t('cart:cart-10')
    let cart11=t('cart:cart-11')
    let cart12=t('cart:cart-12')
    let cart13=t('cart:cart-13')
    let cart14=t('cart:cart-14')
    let cart15=t('cart:cart-15')
  
  
    let cartData = {
      cart1, cart2,
      cart3,
      cart4,
      cart5,
      cart6,
      cart7, cart8, cart9,
      cart10, cart11, cart12, cart13, cart14, cart15
    }
  
  //checkout
  let ch1=t('checkout:ch-1')
  let ch2=t('checkout:ch-2')
  let ch3=t('checkout:ch-3')
  let ch4=t('checkout:ch-4')
  let ch5=t('checkout:ch-5')
  let ch6=t('checkout:ch-6')
  let ch7=t('checkout:ch-7')
  let ch8=t('checkout:ch-8')
  let ch9=t('checkout:ch-9')
  let ch10=t('checkout:ch-10')
  let ch11=t('checkout:ch-11')
  let ch12=t('checkout:ch-12')
  let ch13=t('checkout:ch-13')
  let ch14=t('checkout:ch-14')
  let ch15=t('checkout:ch-15')
  let ch16=t('checkout:ch-16')
  let ch17=t('checkout:ch-17')
  let ch18=t('checkout:ch-18')
  let ch19=t('checkout:ch-19')
  let ch20=t('checkout:ch-20')
  let ch21=t('checkout:ch-21')
  let ch22=t('checkout:ch-22')
let check1=t('checkout:ch1')
let check2=t('checkout:ch2')
let check3=t('checkout:ch3')
let check4=t('checkout:ch4')
let check5=t('checkout:ch5')
let check6=t('checkout:ch6')
let check7=t('checkout:ch7')
let check8=t('checkout:ch8')
let check9=t('checkout:ch9')
let check10=t('checkout:ch10')
let check11=t('checkout:ch11')
let check12=t('checkout:ch12')
let check13=t('checkout:ch13')
let check14=t('checkout:ch14')
let check15=t('checkout:ch15')
let check16=t('checkout:ch16')
let check17=t('checkout:ch17')
let check18=t('checkout:ch18')
let check19=t('checkout:ch19')
let check20=t('checkout:ch20')
let check21=t('checkout:ch21')
let check22=t('checkout:ch22')

  let checkoutData = {
    ch1, ch2,
    ch3,
    ch4,
    ch5,
    ch6,
    ch7,
    ch8,
    ch9, ch10,
    ch11, ch12,
    ch13,
    ch14, ch15, ch16,
    ch17,
    ch18,
    ch19,
    ch20,
    ch21, ch22, check1, check2,
    check3,check20, check4, check21,check22,check5, check6, check7, check8, check9, check10, check11, check19,check12, check13, check14, check15, check16,check17,check18
  }
  const breadcrumbsData = [
    {
      label: home,
      path: "/",
    },

    {
      label:  ch1 ,
      path: "/checkout",
    },
  ];
  return (
    <PublicLayout  breadcrumb={breadcrumbsData} subNav={subNav} breadcrumbsData={breadcrumbsData}  headerData={headerData}  footerDta={footerDta} trendingData={trendingData} breadcrumbTitle={ch1}>
      <Checkout  cartData={cartData}checkoutData={checkoutData} />
    </PublicLayout>
  );
};

export default CheckoutPage;
