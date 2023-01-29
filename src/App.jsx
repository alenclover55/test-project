import logo from "./assets/img/logo.svg"
import  icon3D from "./assets/img/3d.svg"
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main/Main";
import Slider from "./components/SliderItem";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Instruments from "./components/Instruments";

import img11 from './assets/img/topCloud.png'
import img12 from './assets/img/truba.png'
import img13 from './assets/img/water.png'
import img14 from './assets/img/middleCloud.png'
import img15 from './assets/img/instrument.png'

function App() {
  return (
    <>
    <div className="bg-top">
      <Header/>
      <Nav/>
      <Main/>
    </div>
      <Slider/>
      <Form/>
      <Footer/>
      <Instruments/>
      <img className="img1" src={img11} alt="" />
      <img className="img2" src={img12} alt="" />
      <img className="img3" src={img13} alt="" />
      <img className="img4" src={img14} alt="" />
      <img className="img5" src={img15} alt="" />
    </>
  );
}

export default App;
