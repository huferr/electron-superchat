import React from "react";

export default function JoinedChats() {
  const chats = [
    {
      title: "Some Chat 1",
    },
    {
      title: "Some Chat 2",
    },
    {
      title: "Some Chat 3",
    },
  ];

  return (
    <div className="list-container">
      <div className="chat-search-box">
        <div className="input-group">
          <input className="form-control" placeholder="Search" />
        </div>
      </div>
      <ul className="items">
        {chats.map((c) => (
          <li onClick={() => {}} className="item" key={c.title}>
            <div className="item-status">
              <img
                src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg"
                alt="Retail Admin"
              />
              <span className="status online"></span>
            </div>
            <p className="name-time">
              <span className="name mr-2">{c.title}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
