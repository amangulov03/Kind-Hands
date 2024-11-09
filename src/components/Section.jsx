import React from "react";

import { Link } from 'react-router-dom';


function Section() {
    return (
        <div className="container">
            <div className="backf">
            <h1>Платформа для волонтеров  <span>"Kind Hands"</span></h1>
            </div>
            <div className="backf">
            
            <p>
                Наша платформа соединяет волонтеров с некоммерческими
                организациями и государственными учреждениями, помогая людям
                участвовать в волонтерских мероприятиях и оказывать необходимую
                помощь. Мы создаем сообщество людей, готовых изменить мир к
                лучшему, объединяя их усилия для решения социальных проблем в
                реальном времени.
            </p>
            <div className="bbtn">
            <button><Link to="eventForm">Регистрация как организация</Link></button>
            <button><Link to="volunteerForm">Регистрация как волонтер</Link></button>
            </div>
            </div>
        </div>
    );
}

export default Section;
