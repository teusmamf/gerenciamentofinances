import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/home" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/sobre" style={styles.navLink}>Sobre</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};


const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default Navbar;
