import { useState } from "react";
import { NavLink } from "react-router-dom";

import { useChannelContext } from "../hooks/useChannelContext";

import { Button } from "../components/Button";
import { MenuMobile } from "../components/MenuMobile";
import { NavbarMobile } from "../components/NavbarMobile";

export const Home = () => {
  const { channels } = useChannelContext();
  const [searchFilter, setSearchFilter] = useState("");

  function onChangeFilterText(text: string) {
    setSearchFilter(text);
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#20232B]">
      <NavbarMobile onChangeFilterText={onChangeFilterText} />

      <div className="container px-4 mx-auto pt-4 pb-24">
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
