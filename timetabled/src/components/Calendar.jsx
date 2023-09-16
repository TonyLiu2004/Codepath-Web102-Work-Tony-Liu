import React from "react";
import Event from './Event'

const Calendar = () => {
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Starbucks ☕️' color ='green' location = 'outside home'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Yolk 🍳' color ='green' location = 'home'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink' location = 'station'/>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 😋' color ='blue' location = 'beans'/>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <Event event='Cafe 🍵' color = 'lightgreen' location = 'tea cafe'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <Event event = 'Gym 💪' color = 'orange' location = 'gym'/>
                        <td></td>
                        <Event event = 'Gym 💪' color = 'orange' location = 'gym'/>
                        <td></td>
                        <Event event = 'Gym 💪' color = 'orange' location = 'gym'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = 'Shopping 👜' color = 'lightblue' location = 'shop'/>
                        <td></td>
                        <td></td>
                        <Event event = 'Shopping 👜' color = 'lightblue' location = 'shop'/>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Cookies 🍪' color = 'yellow' location = 'home' />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <Event event='Movie 🍿' color = 'red' location = 'theater'/>
                        <td></td>
                        <Event event='Food 🍗' color = 'pink' location = 'home'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <Event event='Cube Game 📦' color = 'green' location = 'Bobs House'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Amongus 🎭' color = 'green' location = 'online' />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color = 'pink' location = 'station'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Bake Bread 🍞' color = 'brown' location = 'home'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Fancy Dinner 🎩' color = 'green' location = 'fancy restaurant' />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;