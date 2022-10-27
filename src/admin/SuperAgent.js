import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "./SuperAgent.css";
import { db } from "../database/firebase";
import Ticket_info from "../customers/Ticket_info";
import { Link } from "react-router-dom";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useStateValue } from "../Redux/StateProvider";

function SuperAgent() {
  const [tickets, setTickets] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    db.collection("tickets").onSnapshot((snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data().ticket));
      setTickets(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
        //   .orderBy("timestamp", "desc")
      );
    });
  }, []);

  return (
    <div className="agentdashboard">
      <div className="agentdashboard_sidebar">
        <div className="agentdashboard_sidebar_header">
          <Avatar src="https://avatars.dicebear.com/api/human/:matiru5810.svg" />
          <h1>username</h1>
        </div>
        <div className="agentdashboard_sidebar_nav">
          <div className="button_container">
            <Link to="/customer" className="header_link">
              <span className="span_tickets">
                <h2>My Reports</h2>
              </span>
            </Link>
          </div>

          <div className="button_container">
            <Link to="/customer" className="header_link">
              <span className="span_tickets">
                <h2>StaffRoom</h2>
              </span>
            </Link>
          </div>

          <div className="button_container">
            <Link to="/customer" className="header_link">
              <span className="span_tickets">
                <h2>Clients</h2>
              </span>
            </Link>
          </div>

          <div className="button_container">
            <Link to="agents" className="header_link">
              <span className="span_tickets">
                <h2>Agents</h2>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="agentdashboard_tickets">
        <div className="agentdashboard_tickets_header">
          <div className=" agentdashboard_tickets_header_heading">
            <h1> date 12th dec 2000</h1>
            <ArrowCircleLeftOutlinedIcon />
          </div>
          <div className=" agentdashboard_tickets_header_title">
            <h2>Tickets</h2>

            <div className="button_wrap">
              <button className="tickets_open">open tickets</button>
              <button className="tickets_closed"> closed tickets</button>
            </div>
          </div>
        </div>
        <div className="agentdashboard_tickets_ticketsdisplay">
          {tickets.map((ticket) => (
            <Ticket_info
              key={ticket.id}
              id={ticket.id}
              assigned={ticket.data.assigned}
              status={ticket.data.status}
              agent={ticket.data.agent}
              subject={ticket.data.subject}
              timestamp={ticket.data.timestamp}
              customer={ticket.data.customer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuperAgent;
