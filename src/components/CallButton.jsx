import React from 'react';

function CallButton(props) {
    return (
        <a className={`button__call ${props.colorBtn}`}>
            Заказать звонок
        </a>
    );
}

export default CallButton;