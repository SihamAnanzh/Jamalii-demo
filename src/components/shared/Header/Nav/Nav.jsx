import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import Document from 'next/dist/pages/_document';


export const Nav = ({ headerData,subNav }) => {
  const [flag,setFlag]=useState('../../../assets/img/Eflag.png')
  const [path,setPath]=useState('en')
  

  const router = useRouter();
  console.log(headerData);
   const navItem = [
    {
      name: `${headerData.ca1}`,
      path: "/face",
      subNav: [
        {
          name: `${subNav.catS1}`,
          path: `/face/${subNav.catS1}`,

        },
        {
          name: `${subNav.catS2}`,
          path: `/face/${subNav.catS2}`,
        },
        {
          name: `${subNav.catS3}`,
          path: `/face/${subNav.catS3}`,
        },
      ],
    },
    {
      name:  `${headerData.ca2}`,
      path: '/body',
      subNav: [
        {
          name: `${subNav.catS1}`,
          path: `/body/${subNav.catS1}`,
        },
        {
          name: `${subNav.catS2}`,
          path: `/body/${subNav.catS2}`,
        },
        {
          name: `${subNav.catS3}`,
          path: `/body/${subNav.catS3}`,
        },
      ],
    },
    {
      name:  `${headerData.ca3}`,
      path: '/brandShop',
      subNav: [
        {
          name: `${subNav.catS1}`,
          path: `/brandShop/${subNav.catS1}`,
        },
        {
          name: `${subNav.catS2}`,
          path: `/brandShop/${subNav.catS2}`,
        },
        {
          name: `${subNav.catS3}`,
          path: `/brandShop/${subNav.catS3}`,
        },
      ],
    },
  ];
  return (
    <ul className='header-nav'>

      {navItem.map((nav) => (
        <li key={nav.path}>
          <Link href={nav.path}>
            <a className={nav.path === router.pathname ? 'active' : ''}>
              {nav.name}
            </a>
          </Link>
          {nav.subNav && (
            <ul>
              {nav.subNav.map((sub) => (
                <li key={sub.path}>
                  <Link href={sub.path}>
                    <a>{sub.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
      
    

    </ul>
  );
};
