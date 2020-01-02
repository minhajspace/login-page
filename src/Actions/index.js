import { CHANGE_USERNAME, CHANGE_PASSWORD } from './types';

export const changeuserName = (data) => {
    return {
        type: CHANGE_USERNAME,
        payload: data
    };

};

export const changePassword = (text) => {
    return {
        type: CHANGE_PASSWORD,
        payload: text
    };
};