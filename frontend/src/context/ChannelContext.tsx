import { createContext, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

interface IMessage {
  userName: string;
  message: string;
}

interface IChannel {
  name: string;
  id: string;
  messages: IMessage[];
}

interface IChannelContext {
  channels: IChannel[];
  channel: IChannel | undefined;
  userName: string;

  createChannel: (name: string) => void;
  createMessage: (message: string) => void;
  login: (userName: string) => void;
  joinChannel: (channelId: string) => void;
}

export const ChannelContext = createContext<IChannelContext>(
  {} as IChannelContext
);

export const ChannelContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const socket = useRef<Socket>();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    socket.current = io("http://localhost:3333");
  }, []);

  const login = (userName: string) => {
    socket.current?.emit("user:login", userName);
    setUserName(userName);
  };

  return (
    <ChannelContext.Provider
      value={{
        login,
        channel: undefined,
        channels: [],
        createChannel: () => {},
        createMessage: () => {},
        joinChannel: () => {},
        userName,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};
