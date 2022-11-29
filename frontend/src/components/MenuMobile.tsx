import { Chats, Gear } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function MenuMobile() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#181920e0] rounded-t-3xl backdrop-blur-xl">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-evenly py-4">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "bg-[#F2FB88] text-[#181920e0] p-3 rounded-2xl"
                : "bg-none text-white p-3 rounded-2xl"
            }
          >
            <Chats size={25} />
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "bg-[#F2FB88] text-[#181920e0] p-3 rounded-2xl"
                : "bg-none text-white p-3 rounded-2xl"
            }
          >
            <Gear size={25} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
