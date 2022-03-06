import React from "react";
import css from "../App.module.css";
import { Card, Image} from "react-bootstrap";


export default function BoardCard(props) {
const {imgUser, answers,questions, fullName} =props;

  return (
    <div className="row m-5 text-center">
    <Card className={css.questionCard}>
      <div className="col-3 align-self-center">
        <Image
          className={css.userPic}
          alt={fullName}
          src={imgUser}
          roundedCircle
        ></Image>
      </div>
      <div className="col">
        <Card.Body>
         
             <div className="container text-center ml-5">
            <Card.Text className={css.reportText+" row"}>Qusetions Created {questions.length} </Card.Text>
            <Card.Text  className={css.reportText+" row"}>Qusetions Answered   { Object.keys(answers).length}</Card.Text>

            </div>
    
        </Card.Body>
    
      </div>
    </Card>
  </div>

  );
}