import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import annaRomanova from '@img/treiners/annaRomanova.jpg'
// styles
import "./annaRomanova.scss";


export default function AnnaRomanova() {

    return (
        <section className="annaRomanova">

            <div className="annaRomanova-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#treiners">Тренеры</HashLink>
                <p> &gt; </p>
                <span>Анна Романова</span>
            </div>

            <div className="annaRomanova-content">
        
                <div className="annaRomanova-info">
                    <h1>Анна Романова</h1>
                    <p>
                        Инструктор групповых программ, персональный тренер, хореограф – педагог, учитель физической культуры, танцор.
                    </p>
                    <p>
                        Специализация и профессиональная деятельность включают силовые, функциональные, танцевальные классы, фитнес-йогу, пилатес, стретч, степ-аэробику, ЛФК, ОФП, детский фитнес.
                    </p>                    
                        <HashLink to="/timetable#top">Узнать расписание</HashLink>
                </div>
                {/* ./annaRomanova-info */}
                <span className="annaRomanova-img">
                    <img src={annaRomanova} alt="annaRomanova"/>
                </span>
            </div>
            {/* ./annaRomanova-content */}

        </section>
	)
}