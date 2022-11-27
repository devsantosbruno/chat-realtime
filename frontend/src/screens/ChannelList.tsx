import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useChannelContext } from "../hooks/useChannelContext";

import { Button } from "../components/Button";
import { MenuMobile } from "../components/MenuMobile";
import { NavbarMobile } from "../components/NavbarMobile";

export const ChannelList = () => {
  const { channels } = useChannelContext();
  const [searchFilter, setSearchFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");

      return;
    }
  }, []);

  function onChangeFilterText(text: string) {
    setSearchFilter(text);
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#20232B]">
      <NavbarMobile onChangeFilterText={onChangeFilterText} />

      <div className="container px-4 mx-auto mt-4">
        {channels.length > 0 ? (
          <div className="flex flex-col gap-3">
            {channels
              .filter((val) => {
                if (searchFilter == "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchFilter.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((channel) => (
                <Button asChild key={channel.id}>
                  <NavLink to={`/chat/${channel.id}`}>{channel.name}</NavLink>
                </Button>
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
