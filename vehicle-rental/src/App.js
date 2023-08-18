import Header from './Components/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import { useLayoutEffect } from 'react';

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Toaster position='bottom-center' reverseOrder={true} />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
