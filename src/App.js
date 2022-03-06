import React from "react";
import { Routes, Route } from "react-router-dom";
import AddQuestion from "./components/AddQuestion";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Logout from "./components/Logout";
import AnsQuestions from "./components/AnsQuestions";
import NotAnsQuestions from "./components/NotAnsQuestions";
import LeaderBoard from "./components/LeaderBoard";

function App() {
  return <div>
 <Routes>
<Route  exact path="/" element={<Login /> } /> 
<Route path="/HomePage" element={<HomePage />} /> 
<Route path="/Logout" element={<Logout />} /> 
<Route  path="/AddQuestion" element={<AddQuestion />} /> 
<Route  path="/AnsQuestions" element={<AnsQuestions />} /> 
<Route  path="/NotAnsQuestions" element={<NotAnsQuestions />} /> 
<Route path="/LeaderBoard" element={<LeaderBoard/>} />
</Routes>
  </div>;
}

export default App;
