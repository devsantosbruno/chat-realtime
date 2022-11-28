import { CaretLeft, User } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useChannelContext } from "../hooks/useChannelContext";

export function Participants() {
  const navigate = useNavigate();
  const { channel } = useChannelContext();
  const arrayUsers: any = [];

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#20232B] pb-28">
      <div className="container py-8 px-4 mx-auto text-white bg-[#5852D6] rounded-b-3xl">
        <div className="flex items-center justify-between gap-2 fixed top-0 left-0 right-0 p-4 z-50 bg-[#121212] shadow rounded-b-3xl">
          <button type="button" onClick={() => navigate(-1)}>
            <CaretLeft size={22} />
          </button>

          <h5 className="bg-[#F2FB88] text-[#121212] px-8 py-2 rounded-full">
            Participants
          </h5>

          <span className="w-[22px]"></span>
        </div>

        <div className="flex flex-col gap-4 pt-16">
          {channel?.messages
            .filter((val) => {
              if (val.userName !== "") {
                if (!arrayUsers.includes(val.userName)) {
                  arrayUsers.push(val.userName);
                  return arrayUsers;
                }
              }
            })
            .map((messagee) => {
              return (
                <div>
                  <div className="bg-[#6963DB] p-4 rounded-xl flex items-center gap-2">
                    <User size={18} color="white" />
                    <h3 className="text-white text-light">
                      {messagee.userName}
                    </h3>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
