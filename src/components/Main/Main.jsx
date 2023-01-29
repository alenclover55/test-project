import cl from './Main.module.css'

import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
import img4 from '../../assets/img/img4.jpg'
function Main() {

    return (
        <div className="section">
        <div className="container">
            <h1>Топас-С 4</h1>
            <div className={cl.wrapper}>
            <div>
            <div className={cl.imgWrapper}>
            <div className={cl.imgList +' '+ 'scrollView'}>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img4} alt="" />
            </div>
                <img className={cl.bigImg} src={img1} alt="" /> 
            </div> 
            <div className={cl.form}>
                <h3>Обсудим детали?</h3>
                <div className={cl.formWrapper}>
                    <input type="text" placeholder='Ваше имя'/>
                    <input type="text" placeholder='Номер телефона'/>
                    <button>Хочу обсудить детали</button>
                </div>
            </div>
            </div>
            <div>
                <div className={cl.productInfo}>
                    <p>Количество пользователей: <span>4 человека</span></p>
                    <p>Производительность: <span>0.8 м3/сут</span></p>
                    <p>Объем залпового сброса: <span>175 л.</span></p>
                    <p>Глубина подводящей трубы: <span>40-80 см</span></p>
                    <p>Потребляемая электроэнергия: <span>1500 Вт/сут.</span></p>
                </div>
                <p className={cl.coast}>
                Цена: <span>78 030 ₽</span>
                </p>
                <div className={cl.descr}>
                    <h3 className={cl.h3}>Описание модели</h3>
                    <p>Индивидуальная система биологической очистки Топас-С 4, как и другие УОСВ из данного модельного ряда, очищают стоки до 98% без вреда для экологии. Все модификации септика ТОПАС-С 4 очищают до 0.8 м3 сточных вод в сутки и имеют максимальный залповый сброс в районе 175 литров. Уже отработанную воду можно накапливать в отдельном резервуаре и в дальнейшем использовать для хозяйственных нужд или производить сброс очищенной воды в ливневую канаву (для моделей Пр со встороенным насосом).</p>
                </div>

            </div>
            </div>
        </div>
        </div>
    );
}

export default Main;