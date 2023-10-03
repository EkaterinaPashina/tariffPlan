import React from 'react';
import './tarif.css';

export default class Tarif extends React.Component {
    render() {
        const { name, price, speed, theme } = this.props;
        return (
            <div className={theme.container} >
                <div className={theme.name}><p>Безлимитный {name}</p></div>
                <div className={theme.price}><p><span className={theme.priceRub}>руб </span>{price}<span className={theme.priceMonth}>/мес</span></p></div>
                <div className={theme.speed}><p>до {speed} Мбит/сек</p></div>
                <div className={theme.value}><p>Объем включенного<br /> трафика не ограничен</p></div>
            </div >
        )
    }
}