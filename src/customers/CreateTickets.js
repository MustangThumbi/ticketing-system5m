import { Button } from '@mui/material'
import { addDoc, collection, orderBy, where,serverTimestamp, query, limit, getDocs, updateDoc, doc, DocumentReference } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import db from '../database/firebase';
import { useStateValue } from '../Redux/StateProvider';
import ClientTickets from './ClientTickets';
import './CreateTicket.css'
import Ticket_info from './Ticket_info';

function CreateTickets({id}) {
  const [{ user },] = useStateValue();
  const [open,setOpen]=useState(false)
  const[tickets,setTickets]=useState('')
  const [subject,setSubject]=useState('');
  const[description,setDescription]=useState('')


  // const createTicket = (e) => {
  //   // const q = query(
  //   //   collection(db, "agents"),
  //   //   where("agent", "==", true),
  //   //   orderBy("email"),
  //   //   limit(1)
  //   // );
  //   // getDocs(q).then((querySnapshot) => {
  //   //   querySnapshot.forEach((doc) => {
  //   //     console.log(doc.id, " => ", doc.data());

  //   db.collection("tickets").add({
  //     subject: input,
  //     description: input1,
  //     assigned: false,
  //     agent: "hi",
  //     status: "open",
  //     customer: user.email,
  //   });
  //   //   });
  //   // });

  //   setInput("");
  //   setInput1("");
  // };
  //save ticket to db function
  const submit= async(e) => {
    // get agents 
    
     const docRef= await addDoc(collection(db,"tickets"),{
        subject: subject,
        description: description,
        assigned: false,
        status: "open",
        customer: user.email,
        timestamp:serverTimestamp()
      })
      // get an agent and get the agent email
      const q = query(
        collection(db, "agents"),
        limit(1)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
   
   const agentN=doc.data().username
  const data = {
   agent: agentN
  };
        // update the ticket with the agent email
       updateDoc(docRef, data);
        
      })
     
    
    
  }






  

    // e.preventDefault();
    // setOpen(false)
    //add ticket to db

  //   db.collection('tickets').add({
  //     customer: user.email,
  //     subject: subject,
  //     description: description,
  //     status: "open",
  //     agent: "",
  //     timestamp: serverTimestamp(),
  //   });
  //   setSubject('')
  //   setDescription('')
  // }

  




  return (
    <div className='Create_main'>
      <div className='Create_left'>
        <Button> CreateTicket</Button>
        <Button > MyTickets

        </Button>
        
      </div>
      <div className='create_right'>
      <form className="add">
              <div className="ticket_subject">
                <h5>subject: </h5>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
              
                ></textarea>
              </div>
              <div className="form_Buttons">
                <Button onClick={submit}>submit</Button>

               <Button>Cancel</Button>
              </div>
            </form>
            <div className="ticket_info">
              <ClientTickets/>
              </div>
          
      </div>
    </div>
     
)}

  
export default CreateTickets
  

