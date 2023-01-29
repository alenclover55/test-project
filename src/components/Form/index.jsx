import cl from './Form.module.css'

import React from 'react';

function Form(props) {
    return (
        <div className="section">
        <div className='container'>
            <div className={cl.wrapper}>
                <h2>Не нашли то, что искали?</h2>
                <p>Заполните форму и мы перезвоним вам в течение 30 минут!</p>
                <div className={cl.wrapperInput}>
                    <input type="text" placeholder='Ваше имя' />
                    <input type="text" placeholder='Номер телефона' />
                    <textarea placeholder='Ваш вопрос  (необязательно)'></textarea>
                </div>
                <button className={cl.btn}>
                Отправить
                </button>
            </div>
            
        </div>
        </div>
    );
}

export default Form;