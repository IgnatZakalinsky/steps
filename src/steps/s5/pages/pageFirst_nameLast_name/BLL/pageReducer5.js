// сделать константы, сделать кейсы на экшены, сделать экшнКреейторы

const SET_TEXT_IN = 'SET_TEXT_IN';
const SET_TEXT_OUT = 'SET_TEXT_OUT';

let initialState = {
    textOut: 'text1',
    textIn: 'text2'
};

const pageReducer5 = (state = initialState, action) => {
    switch (action.type) {

        case SET_TEXT_OUT: {
            return {
                ...state,
                textOut: state.textIn
            }
        }
        case SET_TEXT_IN: {
            return {
                ...state,
                textIn: action.textIn
            }
        }

        default:
            return state;
    }
};


export const setTextIn = (textIn) => ({type: SET_TEXT_IN, textIn});
export const setTextOut = () => ({type: SET_TEXT_OUT});

export default pageReducer5;
