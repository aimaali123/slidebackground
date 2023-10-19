import React from 'react';

import { FaFacebookF, FaTwitter,FaTripadvisor } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className='main-nav'>
      {/* logo */}
      <div className='logo'>
<h2> AZ</h2>
      </div>
      {/* MenuBar */}
      <div className='menu-bar'>
<ul>
    <li>Home</li>
    <li>Menu</li>
    <li>Gallery</li>
    <li>About</li>
    <li>Contact</li>
</ul>
      </div>
      {/* Social Media */}
      <div className='social-media'>
      <ul>   
      <li>
      <a href='#'><FaTripadvisor/></a>
</li>
<li>
<a href='#'><FaFacebookF/></a>
</li>
<li>
<a href='#'><FaTwitter/></a>
</li>
</ul>
      </div>
      </nav>
      {/* Section */}
    </>
  );
}

export default Navbar
