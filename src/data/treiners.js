// id - обязательно для указания(должен быть уникальным)
// img - формат строго 400х420
// alt - название фотки сюда
// text - максимальная длинна 110 символов
// href - формат следующий: /treiners/<ИМЯ ТРЕНЕРА> (для красоты отображения в строке браузера)

// img
import karinaAhmedova from '@img/mainPage/treiners/karinaAhmedova.jpg'
import zasipkinaJanna from '@img/mainPage/treiners/zasipkinaJanna.jpg'
import ekaterinaKashinceva from '@img/mainPage/treiners/ekaterinaKashinceva.jpg'
import vasilcovaViktoria from '@img/mainPage/treiners/vasilcovaViktoria.jpg'
import tatianaAnohina from '@img/mainPage/treiners/tatianaAnohina.jpg'
import bojkovaKristina from '@img/mainPage/treiners/bojkovaKristina.jpg'
import annaRomanova from '@img/mainPage/treiners/annaRomanova.jpg'

const treiners = [
    {
        id: 1,
        img: karinaAhmedova,
        alt: 'karinaAhmedova',
        name: 'Карина Ахмедова',
        text: `Инструктор по фитнес-аэробике, хип-хопу и аэродэнсу (номинация, входящая в спортивную аэробику) для детей и взрослых.`,
        href: '/treiners/karinaAhmedova#top'
    }, 
    {
        id: 2,
        img: zasipkinaJanna,
        alt: 'zasipkinaJanna',
        name: 'Жанна Вячеславовна Засыпкина',
        text: `Тренер по детской спортивной аэробике и по оздоровительной аэробике 
                для взрослых и детей.`,
        href: '/treiners/zasipkinaJanna#top'
    }, 
    {
        id: 3,
        img: ekaterinaKashinceva,
        alt: 'ekaterinaKashinceva',
        name: 'Екатерина Кашинцева',
        text: `Педагог по физической культуре, тренер по детской спортивной аэробике
                и общей физической подготовке. победитель и призер соревнований различного уровня`,
        href: '/treiners/ekaterinaKashinceva#top'
    }, 
    {
        id: 4,
        img: vasilcovaViktoria,
        alt: 'vasilcovaViktoria',
        name: 'Виктория Михайловна Васильцова',
        text: `Тренер-постановщик программ по спортивной аэробике, кандидат 
                в мастера спорта по спортивной аэробике.`,
        href: '/treiners/vasilcovaViktoria#top'
    }, 
    {
        id: 5,
        img: tatianaAnohina,
        alt: 'tatianaAnohina',
        name: 'Татьяна Анохина',
        text: `2-ой разряд по художественной гимнастике, тренер по диско дэнс и физической культуре, с 2013 по 2017 многократный победитель и призер Первенств и Чемпионатов России`,
        href: '/treiners/tatianaAnohina#top'
    }, 
    {
        id: 6,
        img: bojkovaKristina,
        alt: 'bojkovaKristina',
        name: 'Кристина Бажкова',
        text: `Преподаватель танцевальных фитнес тренировок Zumba fitness.`,
        href: '/treiners/bojkovaKristina#top'
    }, 
    {
        id: 7,
        img: annaRomanova,
        alt: 'annaRomanova',
        name: 'Анна Романова',
        text: `Инструктор групповых программ, персональный тренер, хореограф – педагог, учитель физической культуры, танцор.`,
        href: '/treiners/annaRomanova#top'
    }
    
   
]

export default treiners;