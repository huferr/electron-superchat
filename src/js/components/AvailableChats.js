import React from "react";

export default function AvailableChats() {
  const cards = [
    {
      title: "Chat 1",
      description: "Some description 1",
    },
    {
      title: "Chat 2",
      description: "Some description 2",
    },
    {
      title: "Chat 3",
      description: "Some description 3",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        {false && (
          <div className="container-fluid">
            <div className="alert alert-warning">No chats to join :(</div>
          </div>
        )}

        {cards.map((c) => (
          <div className="col-lg-3 col-md-6 mb-3" key={c.title}>
            <div className="card bg-dark">
              <div className="card-body">
                <h5 className="card-title">{c.title}</h5>
                <p className="card-text">{c.description}</p>
                <button onClick={() => {}} className="btn btn-outline-primary">
                  Join Chat
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
