import { SET_AUTH_USER, LOG_OUT,UPDATE_AUTH_USER } from "../actions/types";

export default function authUser(state=[], action){

if (action.type === SET_AUTH_USER){
    return {...action.authUser}
}else if (action.type === LOG_OUT){
    return []
}else if (action.type === UPDATE_AUTH_USER){
    return {...state,answers:{...state.answers,[action.questionId]: action.answer}}
}else {
    return state;
}
}