"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import db from "./api/db";

export default function Home() {
    const roleUser = "user";
    const roleSys = "assistant";

    const [input, setInput] = useState("");

    const [messages, setMessages] = useState([
        {
            role: roleSys,
            content: `Hoy es ${"12/04"} y son las ${"09:30"}. 
            Eres el bot para el centro de computo, tu trabajo el reservar y verificar que aulas estan reservadas. 
            Tus respuestas deben ser precisas en base a la informacion que tienes.
            Si un aula no esta reservada significa que esta disponible.
            En reservation puedes ver que aulas fueron reservadas. 
            Esta es la informacion que tienes, en base a ella puedes responder a las preguntas: ${JSON.stringify(
                db
            )}`,
        },
        {
            role: roleSys,
            content: `¡Hola, soy ItoComp! Estoy aquí para ayudarte.`,
        },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMessage = {
            role: roleUser,
            content: input,
        };
        const newMessages = [...messages, newMessage];
        setInput("");
        setMessages(newMessages);
        sendMessageToApi(newMessages);
    };

    const handleTextareaKeyDown = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault(); // Evitar que se agregue una nueva línea
          handleSubmit(e);
      }
  };

    const buildMessage = (message) => {};

    const sendMessageToApi = async (messages) => {

        const response = await fetch("/api/chat", {
            method: "POST",
            body: JSON.stringify({ messages }),
        });

        const data = await response.json();

        setMessages((prevData) => [...prevData, data.choices[0].message]);

        // setMessages(prevData => [...prevData, {
        //   role: roleSys,
        //   content: "Mensaje default"
        // }]);
    };

    const changeInput = (e) => {
        setInput(e.currentTarget.value);
    };

    return (
        <main className="flex min-h-screen flex-col">
            <div className="py-3 px-6 flex justify-end">
                <Link href="/login" role="button" class="btn btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <g clip-path="url(#clip0_5_7)">
                            <path
                                d="M14 23C14 23.552 13.552 24 13 24H1C0.448 24 0 23.552 0 23C0 19.134 3.134 16 7 16C10.866 16 14 19.134 14 23ZM7 6C4.791 6 3 7.791 3 10C3 12.209 4.791 14 7 14C9.209 14 11 12.209 11 10C11 7.791 9.209 6 7 6ZM24 5V13C24 15.761 21.761 18 19 18H14.474C13.529 16.594 12.199 15.467 10.635 14.773C12.072 13.677 13 11.947 13 10C13 6.686 10.314 4 7 4C5.916 4 4.898 4.288 4.021 4.791C4.133 2.133 6.315 0 9 0H19C21.761 0 24 2.239 24 5ZM20 15C20 14.447 19.552 14 19 14H15.5C14.948 14 14.5 14.447 14.5 15C14.5 15.553 14.948 16 15.5 16H19C19.552 16 20 15.553 20 15Z"
                                fill="#002E6D"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_5_7">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </Link>
            </div>

            <div className="py-3 px-6 flex-grow">
                {messages
                    .slice(1)
                    .filter(
                        (message) =>
                            message?.role === roleUser ||
                            message?.role === roleSys
                    )
                    .map((message, index) => (
                        <div
                            className={`chat ${
                                message.role === "user"
                                    ? "chat-end"
                                    : "chat-start"
                            }`}
                            key={index}
                        >
                            <div className="chat-bubble chat-bubble-primary">
                                {message.content}
                            </div>
                        </div>
                    ))}
            </div>

            <form
                id="TextA"
                className="flex justify-between py-3 px-3"
                onSubmit={handleSubmit}
            >
                <textarea
                    value={input}
                    onChange={changeInput}
                    onKeyDown={handleTextareaKeyDown}
                    placeholder="Escribe aqui..."
                    id="textArea-prompt"
                    class="bg-transparent w-[95%] focus:outline-none"
                ></textarea>
                <button class="btn btn-active" type="submit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 16 16"
                        fill="none"
                    >
                        <path
                            d="M0.112811 2.4701C-0.145856 1.7621 0.0488106 0.978096 0.609477 0.473429C1.16881 -0.0292376 1.96548 -0.142571 2.64148 0.186096L14.7015 5.81543C15.3481 6.1181 15.8108 6.67076 15.9981 7.33076H2.69681L0.150811 2.55476C0.136811 2.52743 0.124144 2.49876 0.112811 2.4701ZM2.70614 8.66476L0.204144 13.4481C0.190144 13.4748 0.178144 13.5014 0.168144 13.5294C-0.0898561 14.2381 0.106811 15.0208 0.667477 15.5248C1.01481 15.8361 1.45348 15.9968 1.89481 15.9968C2.16748 15.9968 2.44081 15.9354 2.69548 15.8108L14.7028 10.1854C15.3515 9.88143 15.8135 9.32676 15.9995 8.66543H2.70614V8.66476Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </form>
        </main>
    );
}
