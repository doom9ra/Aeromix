import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import zdorovayaSpina from '@img/services/adults/zdorovayaSpina.jpg'
// styles
import "./zdorovayaSpina.scss";


export default function ZdorovayaSpina() {

    return (
        <section className="serv-page-adults-zdorovayaSpina">

            <div className="serv-page-adults-zdorovayaSpina-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#services">Услуги</HashLink>
                <p> &gt; </p>
                <span>Здоровая спина</span>
            </div>

            <div className="serv-page-adults-zdorovayaSpina-content">
        
                <div className="serv-page-adults-zdorovayaSpina-info">
                    <h1>Здоровая спина</h1>
                    <p>
                        Урок направлен на укрепление и растяжение мышц спины. Снятия напряжения и улучшения состояния позвоночника.
                    </p>
                    <p>
                        В классе используются практика пилатеса, фитнес йоги, ЛФК, ОФП, стретча, МФР.
                    </p>
                    <p>
                        При наличии оборудования — добавляются комплексы работы с предметом.
                    </p>
                    <p>
                        Продолжительность класса 55 минут.<br/>
                        Подходит для всех уровней подготовки, кроме фазы обострения хронических заболеваний спины.<br/>
                    </p>

                    <HashLink to="/#contacts">Записаться на тренировку</HashLink>

                </div>
                {/* ./serv-page-adults-zdorovayaSpina-info */}

                <span className="serv-page-adults-zdorovayaSpina-img">
                    <img src={zdorovayaSpina} alt="serv-page-adults-zdorovayaSpina"/>
                </span>

            </div>
            {/* ./serv-page-adults-zdorovayaSpina-content */}

        </section>
    )
}