import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import tatianaAnohina from '@img/treiners/tatianaAnohina.jpg'
// styles
import "./tatianaAnohina.scss";


export default function TatianaAnohina() {

    return (
        <section className="tatianaAnohina">

            <div className="tatianaAnohina-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#treiners">Тренеры</HashLink>
                <p> &gt; </p>
                <span>Татьяна Анохина</span>
            </div>

            <div className="tatianaAnohina-content">
        
                <div className="tatianaAnohina-info">
                    <h1>Татьяна Анохина</h1>
                    <p>
                        2-ой разряд по художественной гимнастике, тренер по диско дэнс и физической культуре.
                    </p>
                    <p>
                        С 2013 по 2017 многократный победитель и призер Первенств и Чемпионатов России, Центрального Федерального округа и Московской области по диско дэнс.
                    </p>
                    <p>
                        В настоящее время учится в Московском государственном психолого-педагогическом университете. 
                    </p>
                    
                        <HashLink to="/timetable#top">Узнать расписание</HashLink>
                </div>
                {/* ./tatianaAnohina-info */}
                <span className="tatianaAnohina-img">
                    <img src={tatianaAnohina} alt="tatianaAnohina"/>
                </span>
            </div>
            {/* ./tatianaAnohina-content */}

        </section>
	)
}