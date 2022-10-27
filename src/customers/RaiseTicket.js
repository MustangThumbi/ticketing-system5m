import React, { useState } from "react";
import "./RaiseTicket.css";
import { IconButton } from "@mui/material";
import { Await, Link } from "react-router-dom";
import { addDoc, collection, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../database/firebase";
import { useStateValue } from "../Redux/StateProvider";

//import { query, collection, onSnapshot } from "firebase/firestore";

import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

function RaiseTicket({id}) {
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
  const [min, setMin] = useState("");
  const [completed, setCompleted] = useState(false);



  // create ticket and assign to agents sequentialy
  const createTicket=(e) => {
    e.preventDefault();
  }
  

  // const createTicket = (e) => {
  //   e.preventDefault();
 //  
    //
    // async function getcount(){

    // }


    
//     async function getcount() {
//       const querySnapshot = await db.collection("agents",id,"tickets").get();
//       let count = 0;
//       querySnapshot.forEach((doc) => {
//         count += doc.data().count;
//       });
//       return count;
//     }
// //count the number of tickets in the collection
//     async function getcount() {
//       const querySnapshot = await db.collection("agents",id,"tickets").get();
//       let count = 0;
//       querySnapshot.forEach((doc) => {
//         count += doc.data().count;
//       });
//       return count;
//     }


//create a ticket with the count
    // async function createTicket() {
    //   const count = await getcount();
    //   await addDoc(collection(db, "agents",id,"tickets"), {
    //     count: count + 1,
    //     ticket: input,
    //     min: input1,
    //     completed: completed,
    //     timestamp: serverTimestamp(),
    //   });
    // }
    //add ticket to agents sequentialy
    // db.collection
    
  //   db.collection("agents",id,"tickets").add({
  //   subject: input,
  //   description: input1,
  //   count: getcount(),
  //   completed: false,
  //   }).then(async() => {
  //     // Add document to collection tickets;
  //     await addDoc(collection(db, "tickets"), {
  //       subject: input,
  //       description: input1,
  //       count: getcount(),
  //       completed: false,
  //       agent: user.email,
  //     });
  //   });
  //   setInput("");
  //   setInput1("");
  //   setMin("");
  //   setCompleted(false);
  // }
  

    
  // Assign tickets to agents
  

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
