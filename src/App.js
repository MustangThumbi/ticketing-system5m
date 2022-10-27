import "./App.css";
import RaiseTicket from "../src/customers/RaiseTicket";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ClientTickets from "../src/customers/ClientTickets";
import Login from "../src/auth/Login";
import SignUp from "../src/auth/SignUp";
import SuperAgent from "../src/admin/SuperAgent";
import AddAgent from "../src/admin/AddAgent";
import CreateTickets from "./customers/CreateTickets";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/customer" element={<CreateTickets/>}></Route>
          <Route path="/cus" element={<Login />}></Route>
          <Route path="/custo" element={<SignUp />}></Route>
          <Route path="/super" element={<SuperAgent />}></Route>
          <Route path="/super/agents" element={<AddAgent />}></Route>

          <Route path="/customer/mytickets" element={<ClientTickets />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
