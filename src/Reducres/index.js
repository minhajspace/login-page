import { CHANGE_USERNAME, CHANGE_PASSWORD } from '../Actions/types';


const INITIAL_STATE = {

    userName: " ",
    passowrd: ""
}
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHANGE_USERNAME:
            return { ...state, userName: action.payload };
        case CHANGE_PASSWORD:
            return { ...state, passowrd: action.passowrd };
        default:
            return state;

    }
}