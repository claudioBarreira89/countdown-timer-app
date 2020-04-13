import React, { useState } from "react";
import Counter from "../../elements/Counter";
import getTime from "./getTime";
import { StyledTimer, StyledTitle } from "./styles";
import { getContext } from "../../store";

const CountdownTimer: React.FunctionComponent = () => {
    const { state } = getContext();
    const dateDetails = state.dates[state.activeDate];
    const targetDate = new Date(dateDetails.date);

    const [date, setDate] = useState({
        months: null,
        days: null,
        hours: null,
        minutes: null,
        seconds: null
    });

    setTimeout(() => {
        setDate(getTime(targetDate));
    }, 1000);

    return (
        <>
            {date.seconds !== null && (
                <>
                    <StyledTitle>{dateDetails.name}</StyledTitle>
                    <StyledTimer>
                        <>
                            <Counter
                                label={"months"}
                                value={date.months}
                                total={12}
                            />
                            <Counter
                                label={"days"}
                                value={date.days}
                                total={30}
                            />
                            <Counter
                                label={"hours"}
                                value={date.hours}
                                total={24}
                            />
                            <Counter
                                label={"minutes"}
                                value={date.minutes}
                                total={60}
                            />
                            <Counter
                                label={"seconds"}
                                value={date.seconds}
                                total={60}
                            />
                        </>
                    </StyledTimer>
                </>
            )}
        </>
    );
};
export default CountdownTimer;
