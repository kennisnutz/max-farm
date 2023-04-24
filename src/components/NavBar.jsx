import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navbar.css';

const links = [
  {
    title: 'Docs',
    link: '/docs',
    id: 1,
  },
  {
    title: 'Pools',
    link: '/pools',
    id: 2,
  },
  {
    title: 'Vaults',
    link: '/vaults',
    id: 3,
  },
];

function NavBar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav');
  };
  return (
    <header>
      <h3>
        {' '}
        <Link to={'/'} className="logo">
          Max Farm
        </Link>
      </h3>
      <nav ref={navRef}>
        {links.map((page) => (
          <Link to={page.link} key={page.id} className="links">
            {page.title}
          </Link>
        ))}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <button className="connect-btn">Connect Wallet</button>
    </header>
  );
}

export default NavBar;
