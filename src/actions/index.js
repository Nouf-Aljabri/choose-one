import {
  READ_USERS,
  READ_QUESTIONS,
  SET_AUTH_USER,
  ADD_QUESTION,
  ADD_QUESTION_TO_USER,
  ADD_ANSWER_TO_USER,
  ADD_ANSWER,
  UPDATE_AUTH_USER,
} from "./types";
import { addAnswerToQuestion , getAllUsers ,getAllQuestions , addQuestion  } from "../DATA";


// Users functions 
export const readUsers = (users) => {
  return {
    type: READ_USERS,
    users: users,
  };
};
export const addQuestionToUser = (authedUser, questionID) => {
  return {
    type: ADD_QUESTION_TO_USER,
    questionID,
    authedUser,
  };
};

export const addAnswerToUser = (answer, authedUser, questionId) => {
  return {
    type: ADD_ANSWER_TO_USER,
    answer,
    authedUser,
    questionId,
  };
};

// Quwstions functions 

export const readQuestions = (questions) => {
  return {
    type: READ_QUESTIONS,
    questions: questions,
  };
};


export const addQuestionToStore = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};



export const addAnswer = (answer, authedUser, questionId) => {
  return {
    type: ADD_ANSWER,
    answer,
    authedUser,
    questionId,
  };
};

// AuthUser functions  

export const AddAuthUser = (id) => {
  return {
    type: SET_AUTH_USER,
    authUser: id,
  };
};


export const updateAuthUser = (answer, questionId) => {
  return {
    type: UPDATE_AUTH_USER,
    answer,
    questionId,
  };
};

// Thunk function
export const updateForAddAnswer = (answer, authedUser, questionId) => {
  return function (dispatch) {

    addAnswerToQuestion(answer, authedUser, questionId);
    // update qustion List
    dispatch(addAnswer(answer, authedUser, questionId));
    // update user answer
    dispatch(addAnswerToUser(answer, authedUser, questionId));
    // update auth user
    dispatch(updateAuthUser(answer, questionId));
  };
};


export const loadUsers = () => {
  return function (dispatch) {
    getAllUsers().then((res) => {
      dispatch(readUsers(res));
    });
}};

export const setAuthUser = (authUser) => {
  return function (dispatch) {
      dispatch(AddAuthUser(authUser));
  
}};

export const loadQuestions = () => {
  return function (dispatch) {
    getAllQuestions().then((res) => {
      dispatch(readQuestions(res));
    });
}};

export const addNewQuestion = (question , creator) => {
  return function (dispatch) {
    addQuestion(question).then((Newquestion) => {
      dispatch(addQuestionToStore(Newquestion))
      dispatch(addQuestionToUser(creator,Newquestion.id))
    });  
}};