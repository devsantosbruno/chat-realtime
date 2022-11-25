import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useChannelContext } from "../hooks/useChannelContext";

export const Chat = () => {
  const [message, setMessage] = useState("");
  const { channel, joinChannel, createMessage, userName } = useChannelContext();
  const { channelId } = useParams<{ channelId: string }>();
  const navigate = useNavigate();
  const divRef = useRef<HTMLDivElement>(null);

  const goToBottom = () => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current?.scrollHeight;
    }
  };

  useEffect(() => {
    goToBottom();
  }, [channel?.messages]);

  useEffect(() => {
    if (!channelId) {
      navigate("/channels");
      return;
    }

    if (!localStorage.getItem("user")) {
      navigate("/login");

      return;
    }

    joinChannel(channelId);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h5># {channel?.name}</h5>
        <Link to="/channels">Voltar</Link>
      </div>

      <div ref={divRef} style={{ maxHeight: "300px", overflow: "auto" }}>
        {channel?.messages.map((message, index) => (
          <div key={index}>
            <strong>{message.userName}</strong>: {message.message}
          </div>
        ))}
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          createMessage(message);
          setMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Escreva sua mensagem"
          value={message}
          onChange={(ev) => {
            setMessage(ev.target.value);
          }}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
