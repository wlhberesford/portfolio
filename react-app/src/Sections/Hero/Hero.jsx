import BlurText from "../../components/BlurText/BlurText"
import FadeIn from "../../components/FadeIn/FadeIn";
import Threads from "../../components/Threads/Threads";

function Hero() {
  return (
    <div className="Hero" 
      id = "Hero"
      style={{
      height: "90%",
      width: "100%",
      backgroundColor:"#000"
    }}>
      <div       
        style={{  position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0 }}>
        <Threads
          amplitude={2}
          distance={0}
          enableMouseInteraction={false}
        />
      </div>

      <div className="Hero-Text" style={{height:"100vh", display: "block", alignContent: "center"}}>

        <BlurText
          text="Liam Beresford"
          delay={150}
          animateBy="letters"
          direction="top"
          className="text-10xl mb-8"
          fontSize = "12vh"
          color = "#A6A7A2"          
        />
        <FadeIn 
          text={"Computer Science & Economics Student"}
          font={"Poppins"}
          size={"5vh"}
          color={"#464545"}
        />
      </div>
    </div>
  );
}

export default Hero;