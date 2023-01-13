import { useState } from "react";
import "./App.css";
import Router from '@/routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    console.log(name)
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    // setGreetMsg(await invoke("greet", { name }));
    setGreetMsg(`Hello, ${name}! You've been greeted from Rust!`)
  }

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
