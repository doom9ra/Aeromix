import React from 'react';
import { Link } from 'react-router-dom'
// img
import competition from '@img/aboutClub/competition.jpg';
import training from '@img/aboutClub/training.jpg';
import children from '@img/aboutClub/children.jpg';

// styles
import "./aboutClub.scss";


function AboutClub() {

    return (
        <section className="about-club">

            <div className="about-club-website-position-nav">
                <Link to="/">Главная</Link>
                <p> &gt; </p>
                <span>О клубе</span>
            </div>

            <div className="about-club-content">

                <div className="about-club-info">
                    <h1>Спортивный клуб «Аэромикс»</h1>
                    
                    <img className="about-club-children-img" src={children} alt="children"/>

                    <p>
                        Спортивный клуб «Аэромикс» был создан людьми, 
                        которые с середины 90-х годов активно занимались 
                        развитием и популяризацией детской спортивной 
                        аэробики в России.
                    </p>
                    <p>
                        В клубе работают профессионалы высокого уровня, 
                        имеющие 25-ти летний стаж тренерской работы в детской спортивной аэробике. 
                        За период профессиональной деятельности наши воспитанники становились 
                        победителями и призерами региональных, межрегиональных, 
                        всероссийских и международных соревнований.
                    </p>
                    <p>
                        Лучшие спортсмены входили и входят в состав сборной команды 
                        Московской области по спортивной аэробике. 
                        Среди спортсменов - 16 мастеров спорта, 
                        более 35-ти кандидатов в мастера спорта, 
                        более 100 человек с 1, 2 и 3 взрослыми разрядами по спортивной аэробике.
                    </p>
                </div>

                <img className="about-club-img-competition" src={competition} alt="competition"/>

                <img className="about-club-img-training" src={training} alt="training"/>

                <div className="about-club-act-list">
                    <p>
                        В клубе проводятся спортивные и танцевальные занятия для различных возрастных категорий детей: <br/> 
                            3 – 4 года: Развивающая гимнастика и общая физическая подготовка;<br/>
                            5 – 16 лет: Спортивная аэробика<br/>
                            5 – 16 лет: АэроДэнс<br/>
                            6 – 10 лет: Диско Дэнс<br/>
                            5 – 16 лет: Акробатика<br/>
                    </p>
                    <p>
                        Для взрослых предлагаются различные направления оздоровительной аэробики:<br/>
                            Танцевальные классы: Зумба, Wet Tops<br/>
                            Силовые тренировки: ABC Workout, Power Heat, ABL (пресс, ягодицы, ноги), Body Combat<br/>
                            Занятия на растяжку и развитие гибкости: Пилатес, Стретчинг, Фитнес-Йога, Здоровая спина, Акробатика.<br/>
                    </p>
                    <p>
                        Для всех возрастных категорий:<br/>
                            ОФП (общая физическая подготовка)<br/>
                            Настольный теннис (аренда стола, игра с роботом, индивидуальные тренировки)<br/>
                    </p>
                </div>

            </div>
            {/* ./about-club-content */}
            
        </section>
	)
}

export default AboutClub;


