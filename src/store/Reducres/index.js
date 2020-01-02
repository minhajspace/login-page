import { CHANGE_USERNAME, CHANGE_PASSWORD } from './Actions/types'
import { bindActionCreators } from 'redux'

const INITIAL_STATE = {

    userName: " ",
    passowrd: ""
}

switch (Actions.type) {
    case CHANGE_USERNAME:
        return { ...state, userName: Actions.payload };
    case CHANGE_PASSWORD:
        return { ...state, passowrd: Actions.passowrd };
    default:
        return state;

}