import { CHANGE_USERNAME, CHANGE_PASSWORD } from './types';

export const changeUser = () => {
    return {
        type: CHANGE_USERNAME,
        payload: data
    };

};

export const changePassword = () => {
    return {
        type: CHANGE_PASSWORD,
        payload: text
    };
};