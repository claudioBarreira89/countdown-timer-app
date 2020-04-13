export const initialState = {
    activeDate: 1,
    dates: {
        1: { name: "A DATE FAR AWAY", date: "01/01/30" }
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};

export default reducer;
