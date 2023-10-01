import React from 'react';
import './tarif.css';

export default class Tarif extends React.Component {
    render() {
        const { name, price, speed, theme, } = this.props;
        return (
            <div className="card" >
                <div className={theme.name}><p>Безлимитный {name}</p></div>
                <div className={theme.price}><span className="card__price-rub">руб </span>{price}<span className="card__price-month">/мес</span></div>
                <div className={theme.speed}>До {speed} Мбит/сек</div>
                <div className={theme.value}>Объем включенного<br /> трафика не ограничен</div>
            </div >
        )
    }
}