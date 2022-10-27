import React from "react";
import "./ClientTickets.css";
import { db } from "../database/firebase";
import { useParams } from "react-router-dom";

function Ticket_info({ subject, agent, status, id }) {
  const closeTicket = (e) => {
    e.preventDefault();

    db.collection("tickets")
      .doc(id)
      .update({
        status: "closed",
      })
      .then(function () {
        console.log("status updated");
      });
  };

  return (
    <div>
    {status==='open' ? (
        <div className="ticket_info">
        <h3>subject:{subject}</h3>
        <h3>status:{status}</h3>
        <h3>agent:{agent}</h3>
        <button onClick={closeTicket}>closeticket</button>
      </div>
) : (
        <div className="ticket_info_closed">
        <h3>subject:{subject}</h3>
        <h3>status:{status}</h3>
        <h3>agent:{agent}</h3>
        <button onClick={closeTicket}>Ticket Closed</button>
      
   
    </div>
     )}
    </div>

  );
}

export default Ticket_info;
