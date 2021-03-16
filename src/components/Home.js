import Navbar from '../containers/Navbar';
import PokemonList from '../containers/PokemonList';
import style from '../styles/Home.module.css';

const Home = () => (
  <>
    <Navbar />
    <h1 className={style.title}>
      Hi, here you can select to show all the pokémons or you can select a specific type!
    </h1>
    <PokemonList />
  </>
);

export default Home;
