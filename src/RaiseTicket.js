import React, { useState } from "react";
import "./RaiseTicket.css";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { auth, db } from "./firebase";
import { useStateValue } from "./StateProvider";

//import { query, collection, onSnapshot } from "firebase/firestore";

import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

function RaiseTicket() {
  const [{ user }, dispatch] = useStateValue();

  // const [tickets, setTickets] = useState([]);

  // useEffect(() => {
  //   const q = query(collection(db, tickets));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     let ticketsArr = [];
  //     querySnapshot.forEach((doc) => {
  //       ticketsArr.push({ ...doc.data(), id: doc.id });
  //     });
  //     setTickets(ticketsArr);
  //   });
  // });

  const [input, setInput] = useState("");

  const [input1, setInput1] = useState("");

  const createTicket = (e) => {
    e.preventDefault();
    console.log("You typed >>>>", input);

    db.collection("tickets").add({
      subject: input,
      description: input1,
      asssigned: false,
      agent: "mat",
      status: "open",
      customer: user.email,
    });

    setInput("");
    setInput1("");
  };

  return (
    <div className="raiseticket">
      <div className="raiseticket_header">
        <h1>Hello welcome {user.email} </h1>

        <IconButton>
          <LogoutRoundedIcon className="logout_btn" />
        </IconButton>
      </div>
      <div className=" raiseticket_footer">
        <div className="sidebar">
          <div className="button_container">
            <Link to="/customer" className="header_link">
              <span className="span_tickets">
                <h2>create a ticket</h2>
              </span>
            </Link>
          </div>
          <div className="button_container">
            <Link to="mytickets" className="header_link">
              <span className="span_mytickets">
                <h2>My Tickets</h2>
              </span>
            </Link>
          </div>
        </div>

        <div className="createticket">
          <div className="ticketcontent">
            <h3>create ticket 😃 </h3>

            <form className="add">
              <div className="ticket_subject">
                <h5>subject: </h5>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message"
                  type="text"
                  maxLength="70"
                />
              </div>

              <div className="ticket_description">
                <h5>description: </h5>
                <textarea
                  className="ticket_description"
                  type="text"
                  onChange={(e) => setInput1(e.target.value)}
                  value={input1}
                ></textarea>
              </div>
              <div className="wrap_buttons">
                <button
                  type="submit"
                  onClick={createTicket}
                  className="ticket_submit_button"
                >
                  submit
                </button>

                <button
                  //onClick={createTicket(setInput(""), setInput1(""))}
                  className="ticket_cancel_button"
                >
                  cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaiseTicket;
