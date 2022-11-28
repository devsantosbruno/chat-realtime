import { Moon, SignOut } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/Button";
import { MenuMobile } from "../components/MenuMobile";

export function Settings(props: any) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#20232B] pt-8">
      <div className="text-center px-4">
        <h2 className="text-2xl font-light text-[#20232B] dark:text-white">
          {localStorage.getItem("user")}
        </h2>
      </div>

      <div className="container px-4 mx-auto pt-20">
        <div className="flex flex-col gap-4">
          <Button onClick={() => props.onChangeDarkMode()}>
            <Moon size={22} />
            Dark Mode
          </Button>

          <Button asChild>
            <NavLink
              onClick={() => {
                localStorage.removeItem("user");
              }}
              to="/login"
            >
              <SignOut size={22} />
              Log out
            </NavLink>
          </Button>
        </div>
      </div>

      <MenuMobile />
    </div>
  );
}
