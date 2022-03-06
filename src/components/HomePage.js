import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadQuestions } from "../actions";
import { Tabs ,Tab } from "react-bootstrap";
import TopNavbar from "./TopNavbar";
import NotAnsQuestions from "./NotAnsQuestions";
import AnsQuestions from "./AnsQuestions";
import css from "../App.module.css";



export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(loadQuestions());
  }, []);

  return (
    <div>
       <TopNavbar />
       <br></br>
      
      <Tabs defaultActiveKey="1" transition={false} className={css.secondNav} >
      <Tab eventKey="1" tabClassName={css.secondNavItem}  title="Not Answered Questions">
       <NotAnsQuestions />
      </Tab>
      <Tab eventKey="2" tabClassName={css.secondNavItem}  title="Answered Questions">
       <AnsQuestions />
      </Tab>
    </Tabs>
       
      
    </div>
  );
}
