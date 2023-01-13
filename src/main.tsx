import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";

import 'normalize.css';
import 'antd/dist/reset.css';
import 'virtual:windi.css';
import 'virtual:windi-devtools';
import 'virtual:svg-icons-register';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
