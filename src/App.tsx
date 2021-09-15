import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

import "./App.css";

export const App = () => {
  const [socket, setSocket] = useState<Socket>();
  const [color, setColor] = useState<string>("white");

  const handleButtonClick = () => {
    socket?.emit("user-click");
  };

  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("connect", () => {
      console.log("User connected on server from client!");
    });

    // socket.emit("change-bg-color", color);
    socket.on("change-bg-color", (color: string) => {
      setColor(color);
    });

    setSocket(socket);
  }, []);

  if (!socket) {
    return <></>;
  }

  return (
    <main className="app-container" style={{ backgroundColor: color }}>
      <button className="app-button" onClick={handleButtonClick}>
        Change bg color!
      </button>
    </main>
  );
};
