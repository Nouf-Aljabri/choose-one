import React ,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../App.module.css";
import {Card, Form, FormControl,Button,FormGroup} from "react-bootstrap";
import TopNavbar from "./TopNavbar";
import {addNewQuestion } from "../actions";
import { useNavigate } from "react-router-dom";

export default function AddQuestion() {
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");
  const authUser = useSelector((store) => store.authUser);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const  onSubmit = () =>{
    if(firstOption.length>0 && secondOption.length>0 ){
      const creator = (authUser.fullname).replace(/\s+/g,'').toLowerCase();
      var question = {creator,answerOne:firstOption,answerTwo:secondOption}
      dispatch(addNewQuestion(question , creator));  
      navigate("/HomePage")
    }
  } 

  return (
      <div>
     <TopNavbar />
    <Card className={css.addQuestionCard}>
      <Card.Body>
        <Card.Title className="text-center">
        Ask A Question !
        </Card.Title>
        <Form> 
        <FormGroup  >
  <FormControl aria-label="first option" placeholder="First Option" className="m-2 px-4 py-3" onChange={(e)=>{setFirstOption(e.target.value)}} />
  <FormControl aria-label="second option" placeholder="Second Option" className="m-2 px-4 py-3" onChange={(e)=>{setSecondOption(e.target.value)}} />
</FormGroup>
<div className="text-center  mt-4"> <Button variant="outline-secondary" size="lg"className="mt-4 " onClick={onSubmit} > Submit</Button></div>

      </Form>
 
      </Card.Body>
 
  </Card>
      </div>
 

  );
}
