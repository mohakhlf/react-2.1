import React from "react";

export default function Contact(props) {
  return (
    <div className="Contact">
      <img src={props.image} className="avatar" />
      <div>
        <p className="name">
          {props.first} {props.last}
        </p>
        <div className="status">
          <div
            className={props.online ? "status-online" : "status-offline"}
          ></div>
          <p className="status-text">{props.online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
}
