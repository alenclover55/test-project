import {useRef} from "react";
import Slider from "react-slick";
import cl from './SliderItem.module.css'
import cardImg from '../../assets/img/product.png'
import Slide from "./Slide";

function SliderItem() {

    const slideRef = useRef(null);

    const settings = {
        className: 'center',
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return (
      <div className={cl.section}>
    <div className='container'>
        <div className={cl.sliderCont}>
                <h2>Вам также могут понравиться</h2>
                <div>
                  <span onClick={()=>slideRef.current.slickPrev()} className={cl.leftArr}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="8" viewBox="0 0 21 8" fill="none">
<path d="M0.60199 3.95758C0.406729 4.15284 0.406729 4.46942 0.60199 4.66468L3.78397 7.84666C3.97923 8.04193 4.29582 8.04193 4.49108 7.84666C4.68634 7.6514 4.68634 7.33482 4.49108 7.13956L1.66265 4.31113L4.49108 1.4827C4.68634 1.28744 4.68634 0.970858 4.49108 0.775596C4.29581 0.580333 3.97923 0.580333 3.78397 0.775596L0.60199 3.95758ZM20.4222 3.81113L0.955543 3.81113L0.955544 4.81113L20.4222 4.81113L20.4222 3.81113Z" fill="white"/>
</svg></span>
                <Slider {...settings}>
            <Slide/>
            <Slide/>
            <Slide/>
        </Slider>
        <span onClick={()=>slideRef.current.slickNext()} className={cl.rightArr}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="8" viewBox="0 0 21 8" fill="none">
<path d="M20.3983 3.95766C20.5936 4.15293 20.5936 4.46951 20.3983 4.66477L17.2164 7.84675C17.0211 8.04201 16.7045 8.04201 16.5093 7.84675C16.314 7.65149 16.314 7.33491 16.5093 7.13965L19.3377 4.31122L16.5093 1.48279C16.314 1.28753 16.314 0.970947 16.5093 0.775684C16.7045 0.580422 17.0211 0.580422 17.2164 0.775684L20.3983 3.95766ZM0.578125 3.81122H20.0448V4.81122H0.578125V3.81122Z" fill="white"/>
</svg></span>
                </div>
            </div>
        </div>
        </div>
    );
}

export default SliderItem;