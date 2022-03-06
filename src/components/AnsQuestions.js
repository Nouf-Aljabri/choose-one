import React from "react";
import { useSelector } from "react-redux";
import AnsCard from "./AnsCard";

export default function AnsQuestions() {
    const questionsList = useSelector((store) => store.questions);
    const users = useSelector((store) => store.users);
    const authUser = useSelector((store) => store.authUser);
    const answeredIds = Object.keys(authUser.answers);
    const answered = Object.values(questionsList).filter((question) => answeredIds.includes(question.id));
  
  return ( 
<div>
  
    {answered.map((question, index) => {
          var user = question.creator;
          var imgUser = users[user].imgUrl;
          if (authUser.answers[question.id]=="firstOption"){
            
          return (
            
              <AnsCard imgUser={imgUser} checkValue1={true} checkValue2={false} creator={user} firstOption={question.firstOption} secondOption={question.secondOption} key={index}  />
           
          );}else{
            return (
              <AnsCard imgUser={imgUser}  checkValue1={false} checkValue2={true}  creator={user} firstOption={question.firstOption} secondOption={question.secondOption} key={index}  />
           
          ); 
          }
        })}
</div>
  );
}
