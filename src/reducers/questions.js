
import {READ_QUESTIONS , ADD_QUESTION , ADD_ANSWER} from "../actions/types";

export default function questions(state=[], action) {

  if (action.type === READ_QUESTIONS) { 
    return {...state, ...action.questions};
    
  }else if (action.type === ADD_QUESTION) { 
    return {...state,[action.question.id]:action.question};
    
  }else if (action.type === ADD_ANSWER) { 
    return { ...state,
      [action.questionId]: {
        ...state[action.questionId],
        [action.answer]: {
          ...state[action.questionId][action.answer],
          votes: state[action.questionId][action.answer].votes.concat([action.authedUser]),
        },
      },};
    
  }else {
    return state;
  }
}