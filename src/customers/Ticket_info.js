import React, { useState } from "react";
import "./ClientTickets.css";
import { db } from "../database/firebase";
import { useParams } from "react-router-dom";
import { addDoc, collection, deleteDoc, doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";

function Ticket_info({ subject, agent, status, id ,tickets}) {
  const [assigned,setAssigned]=useState(false);

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


  // const assign = async(e)=>{
  //   e.preventDefault();
   
  //   await addDoc(collection(db,"agents",id,"tickets"),{
  //     subject: subject,
     
  //     timestamp:serverTimestamp(),
  //   })

  //   setAssigned(false);

  // }

  const assign = async()=>{
    if(assigned){
      setAssigned(false);
      await deleteDoc(doc(db,"agents",id,"tickets",id));
    }else{
    await setDoc(doc(db,"agents",id,"tickets",id),{
     subject:subject,
      timestamp:serverTimestamp(),
    })
    
    await updateDoc(doc(db,"agents",id),{
      likes:tickets.length,
    })

  }
  setAssigned(true);
  }
        

  return (
    <div>
    {status==='open' ? (
        <div className="ticket_info">
        <h3>subject:{subject}</h3>
        <h3>status:{status}</h3>
        <h3>agent:{agent}</h3>
        <button onClick={closeTicket}>closeticket</button>
        <button onClick={assign}>assigned</button>
        
     
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
