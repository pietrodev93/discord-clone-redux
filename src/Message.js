import React, {useEffect, useRef} from "react";
import './Message.css';
import {Avatar} from "@material-ui/core";
export default function Message({timestamp, user, message}){
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [message])
  return(
    <div className={"message"}>
      <Avatar src={user.photo}/>
      <div className="message__info">
        <h4>{user.displayName} <span className={"message__timestamp"}>{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
        <p>{message}</p>
      </div>
      <div ref={messagesEndRef} />
    </div>
  )
}
