import { Link } from "react-router-dom";
import { MenuDesktop } from "../components/menuDesktop";
import { MenuMobile } from "../components/MenuMobile";
import { NavbarMobile } from "../components/NavbarMobile";
import { useChannelContext } from "../hooks/useChannelContext";

export const ChannelList = () => {
  const { channels } = useChannelContext();

  return (
    <div className="min-h-screen dark:bg-[#20232B]">
      <MenuDesktop />
      <NavbarMobile />

      <div className="container px-4 mx-auto">
        {channels.length < 0 ? (
          <ul>
            {channels.map((channel) => (
              <li key={channel.id}>
                <Link to={`/chat/${channel.id}`}>{channel.name}</Link>
              </li>
            ))}
          </ul>
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
