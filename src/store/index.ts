import React, { useContext } from "react";
import { initialState } from "./reducer";

const initialContext = {
    state: initialState,
    dispatch: null
};

const appContext = React.createContext(initialContext);

export const getContext = () => useContext(appContext);
export default appContext;
