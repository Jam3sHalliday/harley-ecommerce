import * as type from '../constants/ActionTypes';

let initialState = [];

const user = ( state = initialState, action) => {
    let { user } = action;

    switch(action.type) {
        case type.LOGGED_IN_USER:
            state.push( user );
            return [ ...state ];

        default: return [ ...state ];
    }
}

export default user