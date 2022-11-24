import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { User } from "phosphor-react";
import { useChannelContext } from "../hooks/useChannelContext";

const styles = {
  field: "bg-[#323644] rounded-xl flex flex-col pl-5 pr-10 py-2 relative",
  label: "text-[11px] text-[#9c9da2] text-start",
  input: "text-white text-sm bg-transparent border-none outline-none",
  icon: "absolute right-3 top-0 bottom-0 grid place-content-center",
};

export const Login = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const { login } = useChannelContext();

  return (
    <div className="min-h-screen bg-loginHouse bg-cover bg-no-repeat flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-white text-center max-w-md">
          <h1 className="font-bold text-5xl mb-14">Login</h1>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              login(userName);
              navigate("/channels");
            }}
          >
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-8">
                <div className={styles.field}>
                  <label htmlFor="firstName" className={styles.label}>
                    First name
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    id="firstName"
                    // value={userName}
                    // onChange={(ev) => setUserName(ev.target.value)}
                  />
                  <div className={styles.icon}>
                    <User size={18} color="white" />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="lastName" className={styles.label}>
                    Last name
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    id="lastName"
                    // value={userName}
                    // onChange={(ev) => setUserName(ev.target.value)}
                  />
                  <div className={styles.icon}>
                    <User size={18} color="white" />
                  </div>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="email"
                  // value={userName}
                  // onChange={(ev) => setUserName(ev.target.value)}
                />
                <div className={styles.icon}>
                  <User size={18} color="white" />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <input
                  className={styles.input}
                  type="password"
                  id="password"
                  // value={userName}
                  // onChange={(ev) => setUserName(ev.target.value)}
                />
                <div className={styles.icon}>
                  <User size={18} color="white" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#5195ea] rounded-full py-2 px-20 mt-8"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
