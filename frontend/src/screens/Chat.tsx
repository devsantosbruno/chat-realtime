import { CaretLeft, PaperPlaneTilt } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

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
      navigate("/channels");
      return;
    }

    joinChannel(channelId);
  }, []);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [channel?.messages]);

  return (
    <div className="min-h-screen bg-[#20232B]">
      <div className="container min-h-screen flex flex-col pb-24 justify-between px-4 mx-auto text-white">
        <div className="flex items-center justify-between gap-2 fixed top-0 left-0 right-0 p-4 z-50 bg-black rounded-b-3xl">
          <Link to="/channels">
            <CaretLeft size={22} />
          </Link>
          <h5 className="bg-[#5852D6] px-8 py-2 rounded-full">
            {channel?.name}
          </h5>
          <span className="w-[22px]"></span>
        </div>

        <div className="overflow-auto flex flex-col gap-5 pt-24">
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
                  <span className="mb-2 font-light block text-sm">
                    {message.userName}
                  </span>
                )}

                <span
                  className={`${
                    message.userName === userName
                      ? "bg-[#B785F5]"
                      : "bg-[#16171B]"
                  } rounded-xl p-4 relative break-words inline-block text-start max-w-[80vw] text-md`}
                >
                  {message.message}
                </span>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-light">start the conversation</h2>
            </div>
          )}

          <div className="pr-3 pb-4 pl-3 fixed bottom-0 left-0 right-0 backdrop-blur-sm rounded-t-2xl">
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
    </div>
  );
};
