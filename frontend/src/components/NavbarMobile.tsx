import { ChatsCircle, MagnifyingGlass, PlusCircle } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function NavbarMobile() {
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

        <div className="flex items-center justify-evenly gap-6">
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

          <button
            type="button"
            className="px-4 py-2 mt-4 bg-[#F2FB88] rounded-xl flex items-center justify-center gap-1"
            onClick={() => navigate("/newChannel")}
          >
            <PlusCircle size={22} />
            Create a channel
          </button>
        </div>
      </div>
    </div>
  );
}
