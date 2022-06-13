import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import fitnessJoga from '@img/services/adults/fitnessJoga.jpg'
// styles
import "./fitnessJoga.scss";


export default function FitnessJoga() {

    return (
        <section className="serv-page-adults-fitnessJoga">

            <div className="serv-page-adults-fitnessJoga-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#services">Услуги</HashLink>
                <p> &gt; </p>
                <span>Фитнес -  йога</span>
            </div>

            <div className="serv-page-adults-fitnessJoga-content">
        
                <div className="serv-page-adults-fitnessJoga-info">
                    <h1>Фитнес -  йога</h1>
                    <p>
                        Классический урок йоги, основанный на простых асанах, без ментальной работы клиентов.
                    </p>
                    <p>
                        Направлен на развитие и укрепление физических качеств: гибкость, сила, выносливость. 
                    </p>
                    <p>
                        Урок построен стандартно: разминка, основная часть, стретч, дыхательные упражнения.
                    </p>
                    <p>
                        Применяются также практика ЛФК,ОФП.<br/>
                        Продолжительность 55 минут.<br/>
                        Для всех уровней подготовки, кроме острых фаз воспаления суставов и мышечной боли.<br/>
                    </p>

                    <HashLink to="/#contacts">Записаться на тренировку</HashLink>

                </div>
                {/* ./serv-page-adults-fitnessJoga-info */}

                <span className="serv-page-adults-fitnessJoga-img">
                    <img src={fitnessJoga} alt="serv-page-adults-fitnessJoga"/>
                </span>

            </div>
            {/* ./serv-page-adults-fitnessJoga-content */}

        </section>
    )
}