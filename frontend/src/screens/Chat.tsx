import { CaretLeft, PaperPlaneTilt } from "phosphor-react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import { useChannelContext } from "../hooks/useChannelContext";

export const Chat = () => {
  const [message, setMessage] = useState("");

  const { channel, joinChannel, createMessage, userName } = useChannelContext();
  const { channelId } = useParams<{ channelId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");

      return;
    }

    if (!channelId) {
      navigate("/home");
      return;
    }

    joinChannel(channelId);
  }, []);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [channel?.messages]);

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#20232B]">
      <div className="container min-h-screen flex flex-col pb-20 justify-between px-4 mx-auto text-white">
        <div className="flex items-center justify-between gap-2 fixed top-0 left-0 right-0 p-4 z-50 bg-[#121212] shadow rounded-b-3xl">
          <button type="button" onClick={() => navigate(-1)}>
            <CaretLeft size={22} />
          </button>

          <NavLink to="/participants">
            <h5 className="bg-[#F2FB88] text-[#121212] px-8 py-2 rounded-full">
              {channel?.name}
            </h5>
          </NavLink>

          <span className="w-[22px]"></span>
        </div>

        <div className="overflow-auto flex flex-col gap-5 pt-24 pb-4">
          {channel?.messages.length !== 0 &&
          channel?.messages.length !== undefined ? (
            channel?.messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.userName === userName ? "text-end" : "text-start"
                }`}
              >
                {message.userName === userName ? (
                  ""
                ) : (
                  <span className="mb-2 font-light block text-sm text-[#121212] dark:text-white">
                    {message.userName}
                  </span>
                )}

                <span
                  className={`${
                    message.userName === userName
                      ? "bg-violet-500 text-white shadow"
                      : " bg-white text-[#121212] dark:bg-[#16171B] dark:text-white shadow"
                  } rounded-xl p-4 relative break-words inline-block text-start max-w-[80vw] text-md`}
                >
                  {message.message}
                </span>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-light text-[#121212] dark:text-white">
                start the conversation
              </h2>
            </div>
          )}
        </div>

        <div className="pr-3 pb-4 pl-3 fixed bottom-0 left-0 right-0 backdrop-blur-sm bg-[#f5f5f5] dark:bg-[#20232b11] dark:rounded-t-2xl">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              createMessage(message);
              setMessage("");
            }}
          >
            <label
              htmlFor="messageField"
              className="bg-[#16171B] rounded-xl flex flex-col justify-center pr-20 pl-4 relative"
            >
              <input
                className="text-white bg-transparent border-none outline-none py-4"
                type="text"
                id="messageField"
                placeholder="Type here..."
                value={message}
                onChange={(ev) => {
                  setMessage(ev.target.value);
                }}
                autoComplete="off"
                required
              />
              <button
                type="submit"
                className="absolute right-3 px-3 py-2 bg-[#F2FB88] rounded-xl text-black"
              >
                <PaperPlaneTilt size={22} />
              </button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};
