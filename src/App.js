import "./App.css";
import RaiseTicket from "./RaiseTicket";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ClientTickets from "./ClientTickets";
import Login from "./Login";
import SignUp from "./SignUp";
import SuperAgent from "./SuperAgent";
import AddAgent from "./AddAgent";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/customer" element={<RaiseTicket />}></Route>
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
