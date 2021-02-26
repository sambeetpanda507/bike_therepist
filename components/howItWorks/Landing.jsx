import "@google/model-viewer/dist/model-viewer";
import style from "../../styles/howItWorks/Landing.module.css";

const Landing = () => {
  return (
    <section id="landing" className={style.landing}>
      <div className={style.landingContainer}>
        <model-viewer
          src="/scene.glb"
          ios-src=""
          poster=""
          alt="A 3D model of an astronaut"
          shadow-intensity="5"
          // camera-controls
          skybox-image="/urban_courtyard_02_2k.hdr"
          auto-rotate
          ar
        ></model-viewer>
      </div>
    </section>
  );
};

export default Landing;
