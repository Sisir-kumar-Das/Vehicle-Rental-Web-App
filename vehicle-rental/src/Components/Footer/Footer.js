import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className='container mx-auto p-8'>
    <div className='container-fluid text-center text-md-left text-success'>
      <ul className='flex justify-center items-center gap-4'>
        <li>
          <Link to='/' className='p-2 px-4 rounded-md hover:bg-gray-200'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/contact' className='p-2 px-4 rounded-md hover:bg-gray-200'>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to='/about ' className='p-2 px-4 rounded-md hover:bg-gray-200'>
            About Us
          </Link>
        </li>
      </ul>
    </div>

    <div className='footer-copyright text-center py-3'>
      © 2020 Copyright:www.vehiclerental.com
    </div>
  </footer>
);

export default Footer;
