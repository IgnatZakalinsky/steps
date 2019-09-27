// создать пустой рабочий редьюсер чтобы его можно было заимпортить при создании store

let initialState = {

};

const pageReducer2 = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default pageReducer2;
