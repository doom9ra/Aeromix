import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import karinaAhmedova from '@img/treiners/karinaAhmedova.jpg'
// styles
import "./karinaAhmedova.scss";


export default function KarinaAhmedova() {

    return (
        <section className="karinaAhmedova">

            <div className="karinaAhmedova-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#treiners">Тренеры</HashLink>
                <p> &gt; </p>
                <span>Карина Ахмедова </span>
            </div>

            <div className="karinaAhmedova-content">
        
                <div className="karinaAhmedova-info">
                    <h1>Карина Ахмедова </h1>
                    <p>
                        Инструктор по фитнес-аэробике, хип-хопу и аэродэнсу (номинация, входящая в спортивную аэробику) для детей и взрослых.
                    </p>
                    <p>
                        Является неоднократным победителем и призером различных батлов и фестивалей по хип-хопу и фитнес-аэробике.
                    </p>
                    <p>
                        Действующий спортсмен по спортивной аэробике, выступает на соревнованиях различных уровней.
                    </p>
                        <HashLink to="/timetable#top">Узнать расписание</HashLink>
                </div>
                {/* ./karinaAhmedova-info */}
                <span className="karinaAhmedova-img">
                    <img src={karinaAhmedova} alt="karinaAhmedova"/>
                </span>
            </div>
            {/* ./karinaAhmedova-content */}

        </section>
	)
}