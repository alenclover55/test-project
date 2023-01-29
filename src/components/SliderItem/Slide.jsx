import cl from './SliderItem.module.css'
import cardImg from '../../assets/img/product.png'

const Slide = () => {
    return (
        <>
        <div className={cl.slide}>
            <div className={cl.wrapper}>
                <img src={cardImg} alt="" />
            <div>
                  <h3>Топас-С 4</h3>
                  <p className={cl.people}>До 4 человек</p>
                  <span className={cl.sale}>86 700 ₽</span>
                  <span className={cl.coast}>78 030 ₽</span>
                  <p className={cl.character + ' ' + cl.first}>Очистка:<span>0,8 м3/сут</span></p>
                  <p className={cl.character+' '+ cl.second}>Залповый сброс:<span>175 л</span></p>
            </div>
            </div>
            <div className={cl.btnWrapper}>
              <span className={cl.more}>Подробнее</span>
              <span className={cl.order}>Заказать</span>
            </div>
          </div>
          </>
    );
};

export default Slide;