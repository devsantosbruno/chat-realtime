import { Chats, Gear } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function MenuMobile() {
  const navigate = useNavigate();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 dark:bg-[#181920e0] rounded-t-3xl backdrop-blur-xl">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-evenly py-4">
          <button
            className="p-3 bg-[#F2FB88] rounded-2xl"
            onClick={() => navigate("/channels")}
          >
            <Chats size={25} color="black" />
          </button>

          <button
            className="p-3 rounded-2xl"
            onClick={() => navigate("/login")}
          >
            <Gear size={25} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
}
