import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { EnvelopeSimple, User } from "phosphor-react";
import { useChannelContext } from "../hooks/useChannelContext";

import "../styles/main.css";

const styles = {
  field:
    "bg-[#323644] rounded-xl flex flex-col justify-center pl-5 pr-10 py-2 relative",
  label: "text-[11px] text-[#9c9da2] text-start",
  input: "text-white text-sm bg-transparent border-none outline-none",
  icon: "absolute right-3",
};

export const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { login } = useChannelContext();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/channels");
    }
  }, []);

  return (
    <div className="min-h-screen bg-loginHouse bg-cover bg-no-repeat flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-white text-center lg:max-w-md">
          <h1 className="font-bold text-5xl mb-14">
            Login<span className="bg-[#5195ea] rounded-full w-1 h-1"></span>
          </h1>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              login(`${firstName} ${lastName}`);
              localStorage.setItem("user", `${firstName} ${lastName}`);
              navigate("/channels");
            }}
          >
            <div className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
                <label htmlFor="firstName" className={styles.field}>
                  <label htmlFor="firstName" className={styles.label}>
                    First name
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(ev) => setFirstName(ev.target.value)}
                    autoComplete="off"
                    required
                  />
                  <div className={styles.icon}>
                    <User size={18} color="white" />
                  </div>
                </label>

                <label htmlFor="lastName" className={styles.field}>
                  <label htmlFor="lastName" className={styles.label}>
                    Last name
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(ev) => setLastName(ev.target.value)}
                    autoComplete="off"
                    required
                  />
                  <div className={styles.icon}>
                    <User size={18} color="white" />
                  </div>
                </label>
              </div>

              <label htmlFor="email" className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  className={styles.input}
                  type="email"
                  id="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  autoComplete="off"
                  required
                />
                <div className={styles.icon}>
                  <EnvelopeSimple size={16} color="white" />
                </div>
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#5195ea] rounded-full py-2 px-20 mt-8 hover:bg-[#59a4ff] hover:shadow-lg hover:shadow-white/20 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
