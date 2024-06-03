import React from "react";

import styles from "./ChatWrapper.module.css";
import Messages from "../Messages";
import ChatInput from "../ChatInput";
function ChatWrapper() {
  return <div className={styles.wrapper}>

    <Messages />
    <ChatInput />
  </div>;
}

export default ChatWrapper;
