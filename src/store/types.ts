import { Dispatch } from "react";

export interface IState {
    activeDate: number;
    dates: any;
}

export interface IAppContext {
    dispatch?: Dispatch<any>;
    state: IState;
}
