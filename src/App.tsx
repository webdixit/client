import { FC } from "react";

import { Counter } from "./components/Counter";
import reactLogo from "~/assets/react-logo.svg";
import hamburguer from "~/assets/hamburguer.png";

import "./App.css";

const env = process.env.ENV;

export const App: FC = (): JSX.Element => {
  return (
    <div>
      <h1 className="title">WebDixit</h1>
      <h2>Environment: {env}</h2>
      <img src={hamburguer} width="100" height="100" />
      <img src={reactLogo} width="100" height="100" />
      <Counter />
    </div>
  );
};
