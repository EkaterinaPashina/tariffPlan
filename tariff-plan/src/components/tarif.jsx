import React from 'react';
import './tarif.css';

export default class Tarif extends React.Component {
    render() {
        const { name, price, speed, } = this.props;
        const theme = this.props.theme;
        return (
            <div className="card" >
                <div className={theme.name}><p>Безлимитный {name}</p></div>
                <div className={theme.price}><p><span className="card__price-rub">руб </span>{price}<span className="card__price-month">/мес</span></p></div>
                <div className={theme.speed}><p>До {speed} Мбит/сек</p></div>
                <div className={theme.value}><p>Объем включенного<br /> трафика не ограничен</p></div>
            </div >
        )
    }
}