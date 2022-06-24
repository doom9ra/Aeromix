import React, {useState, useEffect} from "react"

// style
import "./priceTableAdults.scss"

export default function PriceTableAdults() {

    const [priceTableAdults, setPriceTableAdults] = useState(localStorage.getItem('priceTableAdults'));

    if(!priceTableAdults) {
        setPriceTableAdults('onceTreining')
    }

    useEffect(() => {
        setPriceTableAdults(localStorage.getItem('priceTableAdults'))
    }, []);

    useEffect(() => {
        localStorage.setItem('priceTableAdults', priceTableAdults);
    }, [priceTableAdults]);
   
    return (
        <>
            <div className="price-table-adults-chosen-lessons">
                <button 
                    onClick={() => setPriceTableAdults('onceTreining')} 
                    className={priceTableAdults === 'onceTreining' 
                                ? "adults-lesson-chosen" 
                                : "adults-lesson-unchosen"}>
                    Разовое занятие
                </button>

                <button 
                    onClick={() => setPriceTableAdults('onceAWeek')} 
                    className={priceTableAdults === 'onceAWeek' 
                                ? "adults-lesson-chosen" 
                                : "adults-lesson-unchosen"}>
                    1 раз в неделю
                </button>

                <button 
                    onClick={() => setPriceTableAdults('twoTimesAWeek')} 
                    className={priceTableAdults === 'twoTimesAWeek' 
                                ? "adults-lesson-chosen" 
                                : "adults-lesson-unchosen"}>
                    2 раза в неделю
                </button>

                <button 
                    onClick={() => setPriceTableAdults('threeTimesAWeek')} 
                    className={priceTableAdults === 'threeTimesAWeek' 
                                ? "adults-lesson-chosen" 
                                : "adults-lesson-unchosen"}>
                    3 раза в неделю
                </button>

                <button 
                    onClick={() => setPriceTableAdults('unlimited')} 
                    className={priceTableAdults === 'unlimited' 
                                ? "adults-lesson-chosen" 
                                : "adults-lesson-unchosen"}>
                    «Безлимит»
                </button>
            </div>
            
            <table className="price-table-adults" cellSpacing="0">
                <tbody>
                    <tr>
                        <th align="start">Оздоровительная аэробика</th>
                        <th 
                            className={priceTableAdults === 'onceTreining' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            Разовое занятие
                        </th>
                        <th 
                            className={priceTableAdults === 'onceAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            Абонемент на 1 месяц (1 раз в неделю)
                        </th>
                        <th 
                            className={priceTableAdults === 'twoTimesAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            Абонемент на 1 месяц (2 раза в неделю)
                        </th>
                        <th 
                            className={priceTableAdults === 'threeTimesAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            Абонемент на 1 месяц (3 раза в неделю)
                        </th>
                        <th 
                            className={priceTableAdults === 'unlimited' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            Абонемент «Безлимит»*
                        </th>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>
                                Все виды тренировок, имеющиеся в расписании
                            </h4>
                        </td>
                        <td 
                            className={priceTableAdults === 'onceTreining' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>850 руб</p>
                        </td>
                        <td 
                            className={priceTableAdults === 'onceAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>2500 руб</p>
                        </td>
                        <td 
                            className={priceTableAdults === 'twoTimesAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>3800 руб</p>
                        </td>
                        <td 
                            className={priceTableAdults === 'threeTimesAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>4500 руб</p>
                        </td>
                        <td 
                            className={priceTableAdults === 'unlimited' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>5500 руб</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Персональная тренировка</h4>
                        </td>
                        <td 
                            className={priceTableAdults === 'onceTreining' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>3000 руб</p>
                        </td>
                        <td 
                            className={priceTableAdults === 'onceAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            -
                        </td>
                        <td 
                            className={priceTableAdults === 'twoTimesAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            -
                        </td>
                        <td 
                            className={priceTableAdults === 'threeTimesAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            -
                        </td>
                        <td 
                            className={priceTableAdults === 'unlimited' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            -
                        </td>
                    </tr>               
                
                    {/* <tr>
                        <td align="start">
                            <h4>Йога</h4>
                        </td>
                        <td 
                            className={priceTableAdults === 'onceTreining' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>650 руб</p>
                        </td>
                        <td 
                            className={priceTableAdults === 'onceAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>2000 руб</p>
                        </td>
                        <td 
                            className={priceTableAdults === 'twoTimesAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>3600 руб</p>
                        </td>
                        <td 
                            className={priceTableAdults === 'threeTimesAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">-</td>
                        <td 
                            className={priceTableAdults === 'unlimited' ? '' : 'price-table-adults-hidden'} 
                            align="center">-</td>
                    </tr> */}

                </tbody>
                
            </table> 

        </>
    )
}