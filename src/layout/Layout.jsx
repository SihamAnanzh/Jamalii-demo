import { Header } from '../components/shared/Header/Header';
import { Insta } from 'components/shared/Insta/Insta';
import { Footer } from 'components/shared/Footer/Footer';

export const Layout = ({headerData, children,footerDta,subNav }) => {


  
  return (
    <>
      <header className='header'>
        <Header  headerData={headerData} subNav={subNav}/>
      </header>
      <main className='content'>
        {children}
        {/* <Insta /> */}
      </main>
      <footer className='footer'>
        <Footer footerDta={footerDta}/>
      </footer>
    </>
  );
};
