import { useState } from 'react';
import { ProfileAside } from './ProfileAside/ProfileAside';
import { ProfileOrders } from './ProfileOrders/ProfileOrders';

export const Profile = ({profileData,disData,trendingData}) => {
  const [activeTab, setActiveTab] = useState('orders');
  return (
    <>
      {/* <!-- BEGIN PROFILE --> */}
      <div className='profile'>
        <div className='wrapper'>
          <div className='profile-content'>
            <ProfileAside  profileData={profileData}disData={disData} trendingData={trendingData}/>
            <div className='profile-main'>
              <div className='tab-wrap'>
                <ul className='nav-tab-list tabs'>
                  <li
                    onClick={() => setActiveTab('myInfo')}
                    className={activeTab === 'myInfo' ? 'active' : ''}
                  >{profileData.profile4}
                  </li>
                  <li
                    onClick={() => setActiveTab('orders')}
                    className={activeTab === 'orders' ? 'active' : ''}
                  >
                  {profileData.profile3}
                  </li>
                  <li
                    onClick={() => setActiveTab('wishList')}
                    className={activeTab === 'wishList' ? 'active' : ''}
                  >
                   {profileData.profile2}
                  </li>
                </ul>

                <div className='box-tab-cont'>
                  {activeTab === 'myInfo' && (
                    <div className='tab-cont' id='profile-tab_1'>
                   {profileData.profile5}
                    </div>
                  )}

                  {activeTab === 'orders' && <ProfileOrders profileData={profileData}/>}

                  {activeTab === 'wishList' && (
                    <div className='tab-cont' id='profile-tab_3'>
                 {profileData.profile5}
                    </div>
                  )}
                </div>
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
      {/* <!-- PROFILE EOF   --> */}
    </>
  );
};
