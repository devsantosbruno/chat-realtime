import {
  ChatCircleDots,
  ChatsCircle,
  MagnifyingGlass,
  PlusCircle,
} from "phosphor-react";
import { useNavigate } from "react-router-dom";

import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";
import { useChannelContext } from "../hooks/useChannelContext";

export function NavbarMobile() {
  const [channelName, setChannelName] = useState("");
  const { createChannel } = useChannelContext();
  const navigate = useNavigate();

  return (
    <div className="lg:hidden sticky top-0 left-0 right-0 pt-12 pb-4 rounded-t-3xl dark:backdrop-blur-xl">
      <div className="container px-4 mx-auto">
        <label
          htmlFor="search"
          className="bg-[#16171B] rounded-xl flex flex-col justify-center pl-10 pr-5 relative"
        >
          <div className="absolute left-3">
            <MagnifyingGlass size={22} color="white" />
          </div>

          <input
            className="text-white bg-transparent border-none outline-none py-4"
            type="text"
            id="search"
            placeholder="Search"
            // value={email}
            // onChange={(ev) => setEmail(ev.target.value)}
            autoComplete="off"
            required
          />
        </label>

        <Accordion.Root type="single" collapsible>
          <Accordion.Item value="item-1">
            <div className="grid grid-cols-2 items-center justify-evenly gap-6 mb-3">
              <button
                type="button"
                className="px-4 py-2 mt-4 bg-[#F2FB88] rounded-xl flex items-center justify-center gap-1"
                onClick={() => navigate("/channels")}
              >
                <ChatsCircle size={22} className="mr-2" />
                All
                <span className="bg-[#5650C8] text-white rounded-full text-[0.75em] min-w-[1.75em] min-h-[1.75em] flex items-center justify-center">
                  35
                </span>
              </button>

              <Accordion.Header>
                <Accordion.Trigger className="w-full px-4 py-2 mt-4 bg-[#F2FB88] rounded-xl flex items-center justify-center gap-1">
                  <PlusCircle size={22} />
                  Create a channel
                </Accordion.Trigger>
              </Accordion.Header>
            </div>

            <Accordion.Content>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  createChannel(channelName);
                  setChannelName("");
                  console.log(event);
                  // navigate(`/chat/${channel.id}`)
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
              </form>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
        {/* <Accordion.Root type="single" defaultValue="item-1" collapsible>
          <Accordion.Item value="item-1">
            <Accordion.Header>
              <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content>
              Yes. It adheres to the WAI-ARIA design pattern.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root> */}
      </div>
    </div>
  );
}
