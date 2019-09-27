// захардкодить начальные данные в initialState

let initialState = {
    textOut: 'text1',
    textIn: 'text2'
};

const pageReducer4 = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default pageReducer4;
