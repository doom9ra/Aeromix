import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import ekaterinaKashinceva from '@img/treiners/ekaterinaKashinceva.jpg'
// styles
import "./ekaterinaKashinceva.scss";


export default function EkaterinaKashinceva() {

    return (
        <section className="ekaterinaKashinceva">

            <div className="ekaterinaKashinceva-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#treiners">Тренеры</HashLink>
                <p> &gt; </p>
                <span>Екатерина Кашинцева</span>
            </div>

            <div className="ekaterinaKashinceva-content">
        
                <div className="ekaterinaKashinceva-info">
                    <h1>Екатерина Кашинцева</h1>
                    <p>
                        20 лет занималась спортивной аэробикой, победитель и призер соревнований различного уровня, мастер спорта по спортивной аэробике.
                    </p>
                    <p>
                        Педагог по физической культуре, тренер по детской спортивной аэробике и общей физической подготовке.
                    </p>
                    
                        <HashLink to="/timetable#top">Узнать расписание</HashLink>
                </div>
                {/* ./ekaterinaKashinceva-info */}
                <span className="ekaterinaKashinceva-img">
                    <img src={ekaterinaKashinceva} alt="ekaterinaKashinceva"/>
                </span>
            </div>
            {/* ./ekaterinaKashinceva-content */}

        </section>
	)
}