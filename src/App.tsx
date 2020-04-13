import React from "react";
import CountdownTimer from "./components/CountdownTimer";
import GlobalStyles, { AppWrapper } from "./styles";
import Provider from "./components/Provider";

const App = () => (
    <Provider>
        <GlobalStyles />
        <AppWrapper>
            <CountdownTimer />
        </AppWrapper>
    </Provider>
);

export default App;
