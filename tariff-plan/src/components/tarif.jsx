import React from 'react';
import './tarif.css';
import classNames from 'classnames';

export default class Tarif extends React.Component {
    constructor(props) {
        super(props);
        this.state = { choised: false };
    }

    onChangeClass = () => {
        this.setState(({ choised }) => ({ choised: !choised }));
    };

    render() {
        const { name, price, speed, theme } = this.props;
        const choisedClass = classNames([
            `${theme.container}`,
            this.state.choised ? 'active' : ' '
        ]);

        return (
            <div className={choisedClass} onClick={this.onChangeClass}>
                <div className={theme.name}><p>Безлимитный {name}</p></div>
                <div className={theme.price}><p><span className={theme.priceRub}>руб </span>{price}<span className={theme.priceMonth}>/мес</span></p></div>
                <div className={theme.speed}><p>до {speed} Мбит/сек</p></div>
                <div className={theme.value}><p>Объем включенного<br /> трафика не ограничен</p></div>
            </div >
        )
    }
}
