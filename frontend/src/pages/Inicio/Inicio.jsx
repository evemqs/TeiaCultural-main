import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Foto1 from "../../assets/inicio.svg";
import Drop from "../../assets/Vector.svg";
import Divulgue from "../../assets/divulgue.svg";
import Explore from "../../assets/explore.svg";
import Descubra from "../../assets/descubra.svg";
import Button from "../../components/Button/Button";
import Section from "../../components/Section/Section";
import "./Inicio.css";

function Inicio() {

  return (
    <>
      <Navbar />
      <img src={Foto1} alt="Imagem-Inicio" className="imagem-inicio"/>
      <h1>Descubra o melhor da cultura local em um só lugar!</h1>
      <Button title="Explorar"/>

      
      <div className="como-funciona">
        <h2>Como funciona</h2>
        <img src={Drop} alt="drop" />
        
      </div>
      <Section
        title="Divulgue"
        content="Divulgue seu trabalho e conecte-se com oportunidades e serviços, valorizando a cultura de Pernambuco!"
        imageSrc={Divulgue}
        isImageRight={true}
      />

      <Section
        title="Explore"
        content="Explore e salve suas obras e artistas favoritos, além de acompanhar eventos culturais que você ama!"
        imageSrc={Explore}
        isImageRight={false}
      />

      <Section
        title="Descubra"
        content="Aqui, você pode descobrir inspirações, aprender sobre novas técnicas e se conectar com a rica diversidade do universo artesanal!"
        imageSrc={Descubra}
        isImageRight={true}
      />

      <Footer />
    </>
  );
}

export default Inicio;
