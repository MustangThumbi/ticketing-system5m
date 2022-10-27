import React, { useState } from "react";
import "../admin/AddAgent.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useStateValue } from "../Redux/StateProvider";
import db, { auth, provider } from "../database/firebase";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { actionTypes } from "../Redux/reducer";
import Agents_Info from "../admin/Agents_Info";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

function AddAgent() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ agent }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const signup = async (event) => {
    event.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });
      const user = res.user;
      await addDoc(collection(db, "agents"), {
        uid: user.uid,
        username: username,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  // const setAgent = async (e) => {
  //   e.preventDefault();
  //   // const commentTosend = comment;
  //   // setComment("");
  //   await addDoc(collection(db, "agents", id), {
  //     telephone: input1,
  //     email: agent.email,
  //     timestamp: serverTimestamp(),
  //   });

  // };

  // const createAgent = (e) => {
  //   e.preventDefault();
  //   // console.log("You typed >>>>", input);

  //   db.collection("agents").add({
  //     //   telephone: input1,
  //     email: email,
  //     uid: email.agent.uid,
  //   });

  //   setEmail("");
  //   setPassword("");
  //   // setInput1("");
  // };

  // const signIn = () => {
  //   auth
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       dispatch({
  //         type: actionTypes.SET_AGENT,
  //         agent: result.agent,
  //       });
  //     })

  //     .catch((error) => alert(error.messsage));
  // };

  // const navigate = useNavigate();

  // const login = (e) => {
  //   e.preventDefault();

  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       // it successfully created a new user with email and password
  //       //  navigate("/homepage");
  //       navigate("/customer");
  //     })

  //     .catch((error) => alert(error.message));
  // };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          // pull the user’s unique ID out of the result
          // const uid = agent.uid;
          // // Build a reference to their per-user document in the
          // // users collection
          // const userDocRef = firebase.firestore().collection("agents");
          // // Add some initial data to it
          // userDocRef.set({
          //   email: email,
          //   uid: uid,
          // });
        }
      })
      .catch((error) => alert(error.message));
    //  setEmail("");
    //  setPassword("");
  };

  // async function register() {
  //   // create the user account, get credentials back
  //   const userCredential = await firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password);
  //   // pull the user’s unique ID out of the result
  //   const uid = userCredential.user.uid;
  //   // Build a reference to their per-user document in the
  //   // users collection
  //   const userDocRef = firebase.firestore().collection("agents").doc(uid);
  //   // Add some initial data to it
  //   await userDocRef.set({
  //     email: email,
  //     uid: userCredential.user.uid,
  //   });
  // }
  return (
    <div className="add_agents">
      <div className="add_agent_header">
        <span className=" add_agent_header_span">
          <AddCircleOutlineIcon fontSize="large" />
          <h3>AddAgents</h3>
        </span>
      </div>
      <div className="create_agent">
        <form className="create_agent_form">
          <h5>username</h5>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
          />
          <h5>Email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          {/* <button onClick={createAgent} className="create_agent_button">
            create
          </button> */}
          <button onClick={signup} className="create_agent_button">
            create agent
          </button>
        </form>
      </div>

      <div className="agents_display">
        <h3> my agents</h3>
        <Agents_Info />
      </div>
    </div>
  );
}

export default AddAgent;
