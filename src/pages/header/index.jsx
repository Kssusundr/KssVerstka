import React from "react";
import './style.scss'
import { Link } from "react-router-dom";

export const HeaderPage = () => {
    return <div className={'header'}>
        <div className={'header__logo'}>
            <Link to='/'><img src={'/assets/logo.svg'} /></Link>
        </div>
        <div className={'header__menu'}>
            <div> <Link to={'/'}>Главная</Link></div>
            <div> <Link to={'/barnaul'}>Барнаул</Link></div>
            <div> <Link to={'/raspisanie'}>Расписание</Link></div>
            <div> <Link to={'/training'}>Обучение</Link></div>
        </div>
        <div className={'header__icons'}>
            <img src={'/assets/headtgwa.png'} />
        </div>
    </div>
}