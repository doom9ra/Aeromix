import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import discoDance from '@img/services/children/discoDance.jpg'
// styles
import "./discoDance.scss";


export default function DiscoDance() {

    return (
        <section className="serv-page-adults-discoDance">

            <div className="serv-page-adults-discoDance-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#services">Услуги</HashLink>
                <p> &gt; </p>
                <span>Диско Дэнс</span>
            </div>

            <div className="serv-page-adults-discoDance-content">
        
                <div className="serv-page-adults-discoDance-info">
                    <h1>Диско Дэнс</h1>
                    <p>
                        Направление современных спортивных танцев, включающее в себя элементы различных танцевальных современных стилей и спортивной гимнастики
                    </p>
                    <p>
                        Появилось это направление в 1974 году в Нью-Йоркских танцевальных клубах и с тех пор активно развивается. 
                    </p>
                    <p>
                        Сейчас хореография диско включает в себя аэробные тренировки, работу ногами, движения бедрами, шаги в ритме линди-хопа, бальбоа, джайва, рок-н-ролла, хип-хопа, и Jitterbug. 
                    </p>
                    <p>
                        В настоящее время проводится множество соревнований по направлению Диско-фристайл, Диско-танец дуэт, Диско группа, Диско формейшн
                    </p>

                    <HashLink to="/#contacts">Записаться на тренировку</HashLink>

                </div>
                {/* ./serv-page-adults-discoDance-info */}

                <span className="serv-page-adults-discoDance-img">
                    <img src={discoDance} alt="serv-page-adults-discoDance"/>
                </span>

            </div>
            {/* ./serv-page-adults-discoDance-content */}

        </section>
    )
}