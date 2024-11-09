// src/components/FeedbackForm.js
import React, { useState } from "react";

function FeedbackForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="backforms">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="feedback-name" className="form-label">
                        Ваше имя
                    </label>
                    <input
                        type="text"
                        id="feedback-name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="feedback-email" className="form-label">
                        Ваш Email
                    </label>
                    <input
                        type="email"
                        id="feedback-email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="feedback-message" className="form-label">
                        Ваше сообщение
                    </label>
                    <textarea
                        id="feedback-message"
                        className="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Отправить
                </button>
            </form>
        </div>
    );
}

export default FeedbackForm;
