const Reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_TRACKS':
            return {
                ...state,
                tracks: action.payload
            };
        
        case 'UPDATE_USER_ID':
            return {
                ...state,
                user_id: action.payload
            }

        default: 
            return state;
    };
};

export default Reducer;