import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuDesktop } from "../components/menuDesktop";
import { MenuMobile } from "../components/MenuMobile";

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
    <>
      <MenuDesktop />

      <div className="container px-4 mx-auto">
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

      <MenuMobile />
    </>
  );
};
