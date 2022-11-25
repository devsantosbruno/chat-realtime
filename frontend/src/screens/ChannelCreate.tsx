import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { NavbarTop } from "../components/NavbarTop";
import { useChannelContext } from "../hooks/useChannelContext";

export const ChannelCreate = () => {
  const [channelName, setChannelName] = useState("");
  const { createChannel } = useChannelContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");

      return;
    }
  });

  return (
    <div className="container px-4 mx-auto">
      <NavbarTop />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          createChannel(channelName);
          setChannelName("");
        }}
      >
        <label htmlFor="" className="text-violet-600">
          Nome do canal
        </label>
        <input
          type="text"
          name=""
          id=""
          value={channelName}
          onChange={(ev) => setChannelName(ev.target.value)}
        />

        <button type="submit">Criar</button>
      </form>
    </div>
  );
};
