import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuDesktop } from "../components/menuDesktop";
import { MenuMobile } from "../components/MenuMobile";
import { NavbarMobile } from "../components/NavbarMobile";

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
    <div className="min-h-screen bg-[#20232B]">
      <MenuDesktop />
      <NavbarMobile />

      <div className="container px-4 mx-auto">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            createChannel(channelName);
            setChannelName("");
            navigate("/channels");
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
    </div>
  );
};
