import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import fintessAerobics from '@img/services/children/fintessAerobics.jpg'
// styles
import "./fintessAerobics.scss";


export default function FintessAerobics() {

    return (
        <section className="serv-page-adults-fintessAerobics">

            <div className="serv-page-adults-fintessAerobics-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#services">Услуги</HashLink>
                <p> &gt; </p>
                <span>Фитнес – аэробика</span>
            </div>

            <div className="serv-page-adults-fintessAerobics-content">
        
                <div className="serv-page-adults-fintessAerobics-info">
                    <h1>Фитнес – аэробика</h1>
                    <p>
                        Вид спорта, официально зарегистрированный во Всероссийском Реестре Видов Спорта (ВРВС).
                    </p>
                    <p>
                        Это один из самых молодых видов спорта, быстро завоевавший популярность во всем мире. 
                    </p>
                    <p>
                        Это массовый, эстетически увлекательный и поистине зрелищный командный вид спорта, собравший все лучшее из теории и практики оздоровительной и спортивной аэробики. 
                    </p>
                    <p>
                        Своеобразие фитнес-аэробики определяется органичным соединением спорта и искусства, единством движений и музыки.
                    </p>

                    <HashLink to="/#contacts">Записаться на тренировку</HashLink>

                </div>
                {/* ./serv-page-adults-fintessAerobics-info */}

                <span className="serv-page-adults-fintessAerobics-img">
                    <img src={fintessAerobics} alt="serv-page-adults-fintessAerobics"/>
                </span>

            </div>
            {/* ./serv-page-adults-fintessAerobics-content */}

        </section>
    )
}