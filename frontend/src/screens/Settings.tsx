import * as AlertDialog from "@radix-ui/react-alert-dialog";
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

          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <Button>
                <SignOut size={22} />
                Log out
              </Button>
            </AlertDialog.Trigger>

            <AlertDialog.Portal>
              <AlertDialog.Overlay className="bg-black/60 inset-0 fixed grid place-items-center">
                <AlertDialog.Content className="fixed overflow-y-auto grid place-content-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f5f5f5] dark:bg-[#20232B] py-8 px-5 sm:px-10 rounded-lg w-[90vw] sm:max-w-lg shadow-lg shadow-black/50">
                  <AlertDialog.Title className="text-3xl font-black text-center text-[#20232B] dark:text-white">
                    Are you absolutely sure?
                  </AlertDialog.Title>

                  <div className="grid min-[410px]:grid-cols-2 gap-4 mt-12">
                    <AlertDialog.Cancel asChild>
                      <button className="bg-red-500 text-white rounded-md font-light py-2 px-4 text-center">
                        Cancel
                      </button>
                    </AlertDialog.Cancel>

                    <AlertDialog.Action asChild>
                      <NavLink
                        className="bg-violet-500 text-white rounded-md font-light py-2 px-4 text-center"
                        onClick={() => {
                          localStorage.removeItem("user");
                        }}
                        to="/login"
                      >
                        Log out
                      </NavLink>
                    </AlertDialog.Action>
                  </div>
                </AlertDialog.Content>
              </AlertDialog.Overlay>
            </AlertDialog.Portal>
          </AlertDialog.Root>
        </div>
      </div>

      <MenuMobile />
    </div>
  );
}
