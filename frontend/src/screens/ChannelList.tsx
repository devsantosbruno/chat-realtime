import { useNavigate } from "react-router-dom";
import { MenuMobile } from "../components/MenuMobile";
import { NavbarMobile } from "../components/NavbarMobile";
import { useChannelContext } from "../hooks/useChannelContext";

export const ChannelList = () => {
  const { channels } = useChannelContext();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen dark:bg-[#20232B]">
      <NavbarMobile />

      <div className="container px-4 mx-auto">
        {channels.length > 0 ? (
          <div className="flex flex-col gap-3">
            {channels.map((channel) => (
              <button
                type="button"
                key={channel.id}
                className="bg-violet-500 text-white flex items-center gap-3 px-4 font-light text-lg w-full min-h-[60px] rounded-xl"
                onClick={() => navigate(`/chat/${channel.id}`)}
              >
                {channel.name}
                {/* <Link to={`/chat/${channel.id}`}>{channel.name}</Link> */}
              </button>
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
