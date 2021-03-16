import Navbar from '../containers/Navbar';
import style from '../styles/About.module.css';

const About = () => (
  <>
    <Navbar />
    <h1 className={style.center}>
      This is a project made using react-redux and Pokemon API.
    </h1>
  </>
);

export default About;
