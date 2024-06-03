import * as React from "react";

import styles from "./ChatInput.module.css";
import Icon from "../Icon";

function ChatInput() {
  return (
    <form className={styles.wrapper}>
      <textarea></textarea>
      <button className={styles.btn}>
        <Icon name="send" size={24} />
      </button>
    </form>
  );
}

export default ChatInput;
