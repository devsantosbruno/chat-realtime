import { useState } from "react";
import { useChannelContext } from "../hooks/useChannelContext";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const { login } = useChannelContext();

  return (
    <div>
      <h1>Login</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          login(userName);
        }}
      >
        <label>Username</label>

        <input
          type="text"
          placeholder="Seu usuário"
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
