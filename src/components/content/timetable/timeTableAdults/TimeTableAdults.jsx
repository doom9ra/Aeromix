import React, {useState, useEffect} from "react"

// style
import "./timeTableAdults.scss"

export default function TimeTableAdults() {

    const [timeTableAdults, setTimeTableAdults] = useState(localStorage.getItem('timeTableAdults'));

    if(!timeTableAdults) {
        setTimeTableAdults('start')
    }

    useEffect(() => {
        localStorage.setItem('timeTableAdults', timeTableAdults);
    }, [timeTableAdults]);

    useEffect(() => {
        setTimeTableAdults(localStorage.getItem('timeTableAdults'))
    }, []);
   
    return (
        <>
            <div className="time-table-adults-chosen-days">
                <button 
                    onClick={() => setTimeTableAdults('start')} 
                    className={timeTableAdults === 'start' ? "adults-day-chosen" : "adults-day-unchosen"}>
                    пн - вт - ср
                </button>

                <button 
                    onClick={() => setTimeTableAdults('end')} 
                    className={timeTableAdults === 'end' ? "adults-day-chosen" : "adults-day-unchosen"}>
                    чт - пт - сб
                </button>
            </div>
            
            <table className="time-table-adults" cellSpacing="0">
                <tbody>
                    <tr>
                        <th align="start">Время занятия</th>
                        <th className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">Пн</th>
                        <th className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">Вт</th>
                        <th className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">Ср</th>
                        <th className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">Чт</th>
                        <th className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">Пт</th>
                        <th className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">Сб</th>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>9.00 – 10.00</h4>
                        </td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>ПИЛАТЕС (Жанна)</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>ПИЛАТЕС (Жанна)</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>10.00 – 11.00</h4>
                        </td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>ЗУМБА (Кристина)</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>ЗУМБА (Кристина)</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>11.00 – 12.00</h4>
                        </td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>ABL (Виктория)</p>
                            <p>Зал № 2</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>12.00 – 13.00</h4>
                        </td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>ПИЛАТЕС (Жанна)</p>
                            <p>Зал № 2</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>19.00 – 20.00</h4>
                        </td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>ABC WORKOUT (Анна)</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>WET TOPS (Анна)</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>АКРОБАТИКА для взрослых (Михаил)</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>POWER HEAT (Анна)</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>20.00 – 21.00</h4>
                        </td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>ФИТНЕС – ЙОГА (Анна)</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>СТРЕТЧИНГ (Жанна)</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableAdults === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>BODY COMBAT (Виктория)</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>Функциональный тренинг (Виктория)</p>
                            <p>Зал № 2</p>
                            <br/>
                            <p>ФИТНЕС – ЙОГА (Анна)</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>ЗУМБА (Кристина)</p>
                            <p>Зал № 1</p>
                            <br/>
                            <p>ЗДОРОВАЯ СПИНА (Анна)</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableAdults === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                    </tr>

                </tbody>
                
            </table> 

        </>
    )
}