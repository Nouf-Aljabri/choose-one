import {READ_USERS , ADD_QUESTION_TO_USER, ADD_ANSWER_TO_USER} from "../actions/types";

export default function users(state=[], action) {

  if (action.type === READ_USERS) { 
    return {...state, ...action.users};
    
  }else if (action.type === ADD_QUESTION_TO_USER){
   return {...state,
   [action.authedUser]: {
    ...state[action.authedUser],
    questions: state[action.authedUser].questions.concat([
      action.questionID,
    ]),
  }
  }}else if (action.type === ADD_ANSWER_TO_USER){
    return {
      ...state,
      [action.authedUser]: {
        ...state[action.authedUser],
        answers: {
          ...state[action.authedUser].answers,
          [action.questionId]: action.answer,
        },
      },
    }
  }else {
    return state;
  }
}