import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Input } from "@material-tailwind/react";
import { useChannelContext } from "../hooks/useChannelContext";

const styles = {
  input: "text-white",
};

export const Login = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const { login } = useChannelContext();

  return (
    <div className="min-h-screen bg-loginHouse bg-cover bg-no-repeat flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-white text-center max-w-md">
          <h1 className="font-bold text-5xl mb-10">Login</h1>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              login(userName);
              navigate("/channels");
            }}
          >
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-8">
                <Input
                  size="lg"
                  className={styles.input}
                  label="First name"
                  type="text"
                  // value={userName}
                  // onChange={(ev) => setUserName(ev.target.value)}
                />
                <Input
                  size="lg"
                  className={styles.input}
                  label="Last name"
                  type="text"
                  // value={userName}
                  // onChange={(ev) => setUserName(ev.target.value)}
                />
              </div>

              <Input
                size="lg"
                className={styles.input}
                label="Email"
                type="email"
                // value={userName}
                // onChange={(ev) => setUserName(ev.target.value)}
              />
              <Input
                size="lg"
                className={styles.input}
                label="Password"
                type="password"
                // value={userName}
                // onChange={(ev) => setUserName(ev.target.value)}
              />
            </div>

            <Button type="submit" className="rounded-full px-20 mt-6">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
