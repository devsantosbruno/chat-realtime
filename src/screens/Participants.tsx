import { CaretLeft, User } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useChannelContext } from "../hooks/useChannelContext";

export function Participants() {
  const navigate = useNavigate();
  const { channel, userName } = useChannelContext();
  const arrayUsers: Array<string> = [];

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#20232B] pb-28">
      <div className="container py-8 px-4 mx-auto text-white bg-[#5852D6] rounded-b-3xl">
        <div className="flex items-center justify-between gap-2 fixed top-0 left-0 right-0 p-4 z-50 bg-[#121212] shadow rounded-b-3xl">
          <button type="button" onClick={() => navigate(-1)}>
            <CaretLeft size={22} />
          </button>

          <h1 className="bg-[#F2FB88] text-[#121212] px-8 py-2 rounded-full">
            Participants
          </h1>

          <span className="w-[22px]"></span>
        </div>

        <div className="flex flex-col gap-4 pt-16">
          {channel?.messages.length ? (
            channel?.messages
              .filter((val) => {
                if (val.userName !== "") {
                  if (!arrayUsers.includes(val.userName)) {
                    return arrayUsers;
                  }
                }
              })
              .map((messagee) => {
                return (
                  <div
                    className="bg-[#6963DB] p-4 rounded-xl flex items-center gap-2"
                    key={messagee.userName}
                  >
                    <User size={18} color="white" className="flex-shrink-0" />
                    <h3 className="text-white text-light">
                      {messagee.userName === userName
                        ? messagee.userName + "(Você)"
                        : messagee.userName}
                    </h3>
                  </div>
                );
              })
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-light">
                there are no participants at the moment
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
