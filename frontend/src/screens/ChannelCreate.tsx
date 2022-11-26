import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <NavbarMobile />

      <div className="container px-4 mx-auto">
        {/* <form
          className="text-center"
          onSubmit={(event) => {
            event.preventDefault();
            createChannel(channelName);
            setChannelName("");
            navigate("/channels");
          }}
        >
          <label
            htmlFor="search"
            className="bg-[#16171B] rounded-xl flex flex-col justify-center pl-10 pr-5 relative"
          >
            <div className="absolute left-3">
              <ChatCircleDots size={22} color="white" />
            </div>

            <input
              className="text-white bg-transparent border-none outline-none py-4"
              type="text"
              id="search"
              placeholder="Technology"
              value={channelName}
              onChange={(ev) => setChannelName(ev.target.value)}
              autoComplete="off"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-[#5195ea] text-white rounded-full py-2 px-20 mt-8 hover:bg-[#59a4ff] hover:shadow-lg hover:shadow-white/20 transition duration-300"
          >
            Create
          </button>
        </form> */}
      </div>

      <MenuMobile />
    </div>
  );
};
