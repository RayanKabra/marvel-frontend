import Hero from "../assets/img/marvel-hero.webp";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <img src={Hero} alt="Marvel crew" />
      </div>
    </div>
  );
};

export default Home;
