// import orderData from 'data/orders/orders';
import { useState } from 'react';
import { Card } from './Card/Card';

export const ProfileOrders = ({profileData}) => {
 let orderData= [
    {
      "date": "Aug 17, 2020",
      "deliveryAddress": `${profileData.pr7}`,
      "amount": "618.80",
      "status": {
        "onWay": true
      },
      // "orderItems": [
      //   {
      //     "name": "Foundation Beshop",
      //     "price": "125.95"
      //   },
      //   {
      //     "name": "Hair mask with oat extract",
      //     "price": "401.90"
      //   },
      //   {
      //     "name": "Spray balm with oat extract",
      //     "price": "60.95"
      //   }
      // ]
    },
    {
      "date": "APril 22, 2020",
      "deliveryAddress": `${profileData.pr7}`,
      "amount": "618.80",
      "amount": "700.80",
      "status": {
        "delivered": true
      },
      // "orderItems": [
      //   {
      //     "name": "Foundation Beshop",
      //     "price": "125.95"
      //   },
      //   {
      //     "name": "Hair mask with oat extract",
      //     "price": "401.90"
      //   },
      //   {
      //     "name": "Spray balm with oat extract",
      //     "price": "60.95"
      //   }
      // ]
    },
    {
      "date": "jun 10, 2020",
      "deliveryAddress":`${profileData.pr7}`,
      "amount": "618.80",
      "status": {
        "onWay": true
      },
      // "orderItems": [
      //   {
      //     "name": "Foundation Beshop",
      //     "price": "125.95"
      //   },
      //   {
      //     "name": "Hair mask with oat extract",
      //     "price": "401.90"
      //   },
      //   {
      //     "name": "Spray balm with oat extract",
      //     "price": "60.95"
      //   }
      // ]
    },
    {
      "date": "Aug 26, 2020",
      "deliveryAddress":`${profileData.pr7}`,
      "amount": "618.80",
      "amount": "88.80",
      "status": {
        "delivered": true
      },
      // "orderItems": [
      //   {
      //     "name": "Foundation Beshop",
      //     "price": "125.95"
      //   },
      //   {
      //     "name": "Hair mask with oat extract",
      //     "price": "401.90"
      //   },
      //   {
      //     "name": "Spray balm with oat extract",
      //     "price": "60.95"
      //   }
      // ]
    },
    {
      "date": "Aug 12, 2020",
      "deliveryAddress": `${profileData.pr7}`,
      "amount": "618.80",
      "amount": "234.80",
      "status": {
        "delivered": true
      },
      // "orderItems": [
      //   {
      //     "name": "Foundation Beshop",
      //     "price": "125.95"
      //   },
      //   {
      //     "name": "Hair mask with oat extract",
      //     "price": "401.90"
      //   },
      //   {
      //     "name": "Spray balm with oat extract",
      //     "price": "60.95"
      //   }
      // ]
    }
  ]
  
  const [active, setActive] = useState(-1);
  const orders = [...orderData];
  const handleCollapse = (indx) => {
    if (active === indx) {
      setActive(-1);
    } else {
      setActive(indx);
    }
  };
  return (
    <>
      <div className='profile-orders'>
        <div className='profile-orders__row profile-orders__row-head'>
          <div className='profile-orders__col'>{profileData.pr4}</div>
          <div className='profile-orders__col'>{profileData.pr3}</div>
          <div className='profile-orders__col'>{profileData.pr2}</div>
          <div className='profile-orders__col'>{profileData.pr1}</div>
        </div>
        {orders.map((order, index) => (
          <Card
          profileData={profileData}
            key={index}
            index={index}
            onCollapse={handleCollapse}
            order={order}
            active={active}
          />
        ))}
      </div>
    </>
  );
};
