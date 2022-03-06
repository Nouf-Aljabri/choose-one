import React from "react";
import css from "../App.module.css";
import { Card, Image, ButtonGroup, Button} from "react-bootstrap";
import { useSelector , useDispatch } from "react-redux";
import { updateForAddAnswer } from "../actions";



export default function NotAnsCard(props) {
const {imgUser,questionID ,creator,firstOption,secondOption } =props;
const authUser = useSelector((store) => store.authUser);
const dispatch = useDispatch();

const  handleClick=(e)=>{
  const authUserKey = (authUser.fullname).replace(/\s+/g,'').toLowerCase();
  
  dispatch(updateForAddAnswer(e.target.value , authUserKey, questionID));
  };
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

          <ButtonGroup vertical className="gap-2 "  onClick={handleClick} >
            <Button variant="outline-success" className="mb-2 " id={css.opthinBtn} value="firstOption" >{firstOption}</Button>
            <Button variant="outline-success" className="mb-2" id={css.opthinBtn} value="secondOption"> {secondOption}</Button>
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