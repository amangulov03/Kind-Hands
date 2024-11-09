// src/components/EventList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EventList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
        setEvents(storedEvents);
    }, []);

    const deleteEvent = (id) => {
        const updatedEvents = events.filter((event) => event.id !== id);
        setEvents(updatedEvents);
        localStorage.setItem("events", JSON.stringify(updatedEvents));
    };

    return (
        <div className="list">
            {events.map((event) => (
                <div key={event.id} className="event-card">
                    <h3>{event.name}</h3>
                    <p>
                        <strong>Местоположение:</strong> {event.location}
                    </p>
                    <p>
                        <strong>Дата:</strong> {event.date}
                    </p>
                    <p>
                        <strong>Количество волонтеров:</strong>{" "}
                        {event.volunteersCount}
                    </p>
                    <div className="block">
                        <Link to={`/edit-event/${event.id}`} className="btn">
                            Редактировать
                        </Link>
                        <button
                            className="btn "
                            onClick={() => deleteEvent(event.id)}
                        >
                            Удалить
                        </button>
                        <a href={`/volunteer?id=${event.id}`}>Записаться</a>
                        <a href={`/volunteers-list?id=${event.id}`}>
                            Посмотреть волонтеров
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EventList;
