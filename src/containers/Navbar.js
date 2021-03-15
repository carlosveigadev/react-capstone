import { Link } from 'react-router-dom';
import style from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <>
      <h2 className={style.title}>Pokemon Pokédex</h2>
      <div className={style.navbarItems}>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
      </div>
    </>
  );
}

export default Navbar;
