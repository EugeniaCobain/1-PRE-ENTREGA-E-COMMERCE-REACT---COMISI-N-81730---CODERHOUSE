import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import HomeSection from "../../components/Home";
import LinkUp from "../../components/LinkUp";
import "../../estilos/home.css";

const Home = () => {
  return (
    <main>
      <Banner image="/assets/imgs/home/slider1.jpg" position="75% 30%" />
      <HomeSection
        title="About the site"
        imgSrc="/assets/imgs/home/inicio1.jpg"
        imgAlt="Cemetery statue"
        side="right"
      >
        <p>
          Welcome to our website, where reverence meets inspiration, and the
          past echoes through the hallowed grounds of those who shaped the
          course of history.
        </p>
        <p>
          Cemeteries are captivating spaces that embody the intersection of art
          and remembrance and they are living testaments to the enduring power
          of human achievement and the impact one individual can have on the
          collective consciousnes.
        </p>
        <p>
          In this sacred virtual space, we understand the profound importance
          of commemorating the lives of those who changed the world, leaving an
          enduring impact on the tapestry of human existence. Whether it's the
          pioneers who paved the way for progress, the visionaries who sparked
          innovation, or the compassionate souls who dedicated their lives to
          making the world a better place, our website is a gateway to the
          final resting places of these remarkable individuals.
        </p>
        <p>
          As you navigate through our platform, you'll discover a curated
          collection of information and guides, all designed to assist and
          inspire your pilgrimage to the burial places of these world-changers.
        </p>
         <LinkUp />
      </HomeSection>

      <HomeSection
        title="Grave hunters"
        imgSrc="/assets/imgs/home/inicio2.jpeg"
        imgAlt="Kant's grave"
        side="left"
      >
        <p>
          If you've found your way here, it's likely that, like us, you are
          drawn by the desire to pay homage to the luminaries whose indelible
          mark on the world continues to resonate in our hearts and minds.
        </p>
        <p>
          Each grave is more than just a memorial: it becomes a tangible link to
          the past, a connection with the legacy left behind by those who have
          influenced not only societies at large but have also touched our
          personal lives in profound ways, a place where you can stand in quiet
          contemplation, surrounded by the echoes of greatness.
        </p>
        <p>
          Join us on this poignant exploration, as we collectively honor the
          lives of those who who changed the world and continue to shape our personal narratives.
        </p>
        <p>
          Let's go hunt some{" "}
          <Link to="/graves" className="linkGraves">
            graves!
          </Link>
        </p>
         <LinkUp />
      </HomeSection>
    </main>
  );
};

export default Home;