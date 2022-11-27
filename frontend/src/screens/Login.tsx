import { EnvelopeSimple, User } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useChannelContext } from "../hooks/useChannelContext";

import { InputLogin } from "../components/InputLogin";

import "../styles/main.css";

export const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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
              console.log(`${firstName} ${lastName}`);
              login(`${firstName} ${lastName}`);
              localStorage.setItem("user", `${firstName} ${lastName}`);
              navigate("/channels");
            }}
          >
            <div className="flex flex-col gap-4">
              <div className="grid min-[410px]:grid-cols-2 gap-4 min-[410px]:gap-8">
                <InputLogin
                  typeField="text"
                  labelTitle="First name"
                  setState={setFirstName}
                  icon={<User size={18} color="white" />}
                />

                <InputLogin
                  typeField="text"
                  labelTitle="Last name"
                  setState={setLastName}
                  icon={<User size={18} color="white" />}
                />
              </div>

              <InputLogin
                typeField="email"
                labelTitle="Email"
                icon={<EnvelopeSimple size={16} color="white" />}
              />
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
