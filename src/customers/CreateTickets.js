import { Button, Link, Modal } from '@mui/material'
import { addDoc, collection, orderBy, where,serverTimestamp, query, limit, getDocs, updateDoc, doc, DocumentReference, setDoc, deleteDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import db from '../database/firebase';
import { useStateValue } from '../Redux/StateProvider';
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ClientTickets from './ClientTickets';
import './CreateTicket.css'
import Ticket_info from './Ticket_info';

function CreateTickets({id}) {
  const [{ user },] = useStateValue();
  const [open,setOpen]=useState(false)
  const [assigned,setAssigned]=useState(false)
  const[tickets,setTickets]=useState('')
  const [subject,setSubject]=useState('');
  const[description,setDescription]=useState('')

  const submit= async(e) => {
    
    
     const docRef= await addDoc(collection(db,"tickets"),{
        subject: subject,
        description: description,
        assigned: false,
        status: "open",
        customer: user.email,
        timestamp:serverTimestamp()
      })
    
      const q = query(
        collection(db, "agents"),
        limit(1)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
   
   const agentN=doc.data().username
   //get the number of tickets where agent=== agentN

  const data = {
   agent: agentN,
   
  };
  
       updateDoc(docRef, data)
     
    
  
      })
      setOpen(false)
      setSubject('')
      setDescription('')
     
    
    
  }


  return (
    <div className='all'>
    <Link to="/customer" className="backheader_link">
    <ArrowCircleLeftOutlinedIcon className="back_button" />
  </Link>
    <div className='Create_main'>
      <div className='Create_left'>
        <button className='btn_mains' onClick={() => setOpen(true)}> Create Ticket</button>
        <button className='btn_mains'  > My Tickets

        </button>
        
      </div>
      <div className='create_right'>

  <Modal
     className='signup-modal'
  open={open}
  onClose={()=> setOpen(false)}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
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
</Modal>
            <div className="ticket_info">
              <ClientTickets/>
              </div>
          
      </div>
      </div>
    </div>
     
)}

  
export default CreateTickets
  

