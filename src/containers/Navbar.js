import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <h2>Pokemon Pokedex</h2>
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
    </>
  );
}

export default Navbar;
