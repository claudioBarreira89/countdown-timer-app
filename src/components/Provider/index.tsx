import React, { useReducer } from "react";
import appContext from "../../store";
import reducer, { initialState } from "../../store/reducer";

const Provider: React.FunctionComponent = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <appContext.Provider value={{ state, dispatch }}>
            {children}
        </appContext.Provider>
    );
};

export default Provider;
