import React from "react";
import { useSelector } from "react-redux";
import TopNavbar from "./TopNavbar";
import Table from "react-bootstrap/Table";
import css from "../App.module.css";
import { Image } from "react-bootstrap";

export default function LeaderBoard() {
  const users = useSelector((store) => store.users);
  return (
    <div>
      <TopNavbar />

      <div className="container mt-5 text-center w-75">
        <Table variant="light" id={css.boardTable}>
          <thead id={css.boardHead}>
            <tr>
              <th>Score</th>
              <th className={css.boardHead}>User </th>
              <th>Answered Questions</th>
              <th>Created Questions</th>
            </tr>
          </thead>
          <tbody className={css.boardData}>
            {Object.keys(users).map((key, index) => {
              var ans = Object.keys(users[key].answers).length;
              var qus = users[key].questions.length;
              return (
                <tr key={index}>
                  <td align="center">
                    {" "}
                    <div id={css.score}> {ans + qus} </div>
                  </td>
                  <td align="justify">
                    <Image
                      className={css.boardPic}
                      alt={users[key].fullname}
                      src={users[key].imgUrl}
                      roundedCircle
                    ></Image>{" "}
                    &nbsp; &nbsp;
                    {users[key].fullname}
                  </td>
                  <td>{ans}</td>
                  <td> {qus}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      {/* {Object.keys(users).map((key, index) => {
        return (
          <BoardCard
            key={index}
            imgUser ={users[key].imgUrl}
            answers = {users[key].answers}
            questions = {users[key].questions}
            
           
          />
         
        );
      })} */}
    </div>
  );
}
