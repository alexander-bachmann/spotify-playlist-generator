const Reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_TRACKS':
            return {
                ...state,
                tracks: action.payload
            };

        default: 
            return state;
    };
};

export default Reducer;