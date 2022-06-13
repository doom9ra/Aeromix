import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import wetTops from '@img/services/adults/wetTops.jpg'
// styles
import "./wetTops.scss";


export default function WetTops() {

    return (
        <section className="serv-page-adults-wetTops">

            <div className="serv-page-adults-wetTops-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#services">Услуги</HashLink>
                <p> &gt; </p>
                <span>Wet Tops</span>
            </div>

            <div className="serv-page-adults-wetTops-content">
        
                <div className="serv-page-adults-wetTops-info">
                    <h1>Танцевальный урок «Wet Tops» (Мокрые майки)</h1>
                    <p>
                        Танцевальный класс, в нон-стопе, в котором представлены практические все танцевальные
                            направления от латины до хип хопа, от контемпа до тверка. 
                    </p>
                    <p>
                        Урок интересен тем, что все танцевальные направления очень разнообразные,
                            динамичные, но опять же урок направлен на тренировку сердечно-сосудистой системы,
                            дыхательной системы, улучшает координацию, помогает в процессе контроля веса. 
                    </p>
                    <p>
                        Урок предполагает смену программ.
                        Продолжительность 55 минут.
                        Подходит для всех уровней подготовки.
                    </p>

                    <HashLink to="/#contacts">Записаться на тренировку</HashLink>

                </div>
                {/* ./serv-page-adults-wetTops-info */}

                <span className="serv-page-adults-wetTops-img">
                    <img src={wetTops} alt="serv-page-adults-wetTops"/>
                </span>

            </div>
            {/* ./serv-page-adults-wetTops-content */}

        </section>
    )
}