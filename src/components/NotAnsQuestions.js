import React from "react";
import { useSelector } from "react-redux";
import NotAnsCard from "./NotAnsCard";




export default function NotAnsQuestions() {
    const questionsList = useSelector((store) => store.questions);
    const authUser = useSelector((store) => store.authUser);
    const users = useSelector((store) => store.users);
  
    const answeredIds = Object.keys(authUser.answers);
    const unanswered = Object.values(questionsList).filter(
      (question) => !answeredIds.includes(question.id)
    );
    

  return ( 
<div>
 
    {unanswered.map((question, index) => {
          var user = question.creator;
          var imgUser = users[user].imgUrl;
          return (
              <NotAnsCard imgUser={imgUser} questionID={question.id} creator={user} firstOption={question.firstOption["string"]} secondOption={question.secondOption["string"]} key={index} />
           

              
          );
        })}
      
</div>
  );
}
