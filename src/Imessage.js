import React from "react";

import "./Imessage.css";

import Chat from "./Components/Chat/Chat";
import Sidebar from "./Components/Sidebar/Sidebar";

function Imessage() {
  return (
    <div className="imessage">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Imessage;
