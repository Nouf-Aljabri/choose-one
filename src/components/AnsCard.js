import React from "react";
import css from "../App.module.css";
import { Card, Image, ButtonGroup, Button} from "react-bootstrap";


export default function AnsCard(props) {
const {imgUser, creator,firstOption,secondOption , checkValue1, checkValue2} =props;

  return (
    <div className="row m-5 text-center">
    <Card className={css.questionCard}>
      <div className="col-3 align-self-center">
        <Image
          className={css.userPic}
          alt="Profile image"
          src={imgUser}
          roundedCircle
        ></Image>
      </div>
      <div className="col">
        <Card.Body>
          <Card.Title className="text-center">
            Would You Rather..
          </Card.Title>
        
          <ButtonGroup vertical className=" gap-2 " >  
            <Button variant="outline-success" id={css.opthinBtn} active={checkValue1} disabled={checkValue2}  className="mb-2 ">{firstOption.string}</Button>
            <Button variant="outline-success"  id={css.opthinBtn} active={checkValue2} disabled={checkValue1}  className="mb-2" > {secondOption.string}</Button>
          </ButtonGroup>

        </Card.Body>
        <footer className="blockquote-footer">
          By : {creator}
        </footer>
      </div>
    </Card>
  </div>

  );
}