import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MenuMobile } from "../components/MenuMobile";
import { NavbarMobile } from "../components/NavbarMobile";
import { useChannelContext } from "../hooks/useChannelContext";

export const ChannelList = () => {
  const { channels } = useChannelContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");

      return;
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#20232B]">
      <NavbarMobile />

      <div className="container px-4 mx-auto mt-4">
        {channels.length > 0 ? (
          <div className="flex flex-col gap-3">
            {channels.map((channel) => (
              <NavLink
                key={channel.id}
                className="bg-violet-500 text-white flex items-center gap-3 px-4 font-light text-lg w-full min-h-[60px] rounded-xl"
                to={`/chat/${channel.id}`}
              >
                {channel.name}
              </NavLink>
            ))}
          </div>
        ) : (
          <h2 className="text-xl font-light dark:text-white">
            There are no chats at the moment, feel free to create the first one
          </h2>
        )}
      </div>

      <MenuMobile />
    </div>
  );
};
