import React, { useEffect, useState } from "react";
import { StyledCounter, StyledLabel } from "./styles";

const Counter = ({ value, total, label }) => {
    const [circumference, setCircumference] = useState(0);

    useEffect(() => {
        const circle = document.querySelector("circle");
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;

        setCircumference(circumference);
    }, []);

    const setProgress = () => {
        const offset = circumference - (value / total) * circumference;
        return offset;
    };

    return (
        <StyledCounter>
            <div>
                <svg className="progress-ring" width="180" height="180">
                    <circle
                        className="progress-ring__circle"
                        stroke="#424141"
                        strokeWidth="1"
                        fill="transparent"
                        r="80"
                        cx="90"
                        cy="90"
                    />
                </svg>

                <svg className="progress-ring" width="180" height="180">
                    <circle
                        className="progress-ring__circle"
                        stroke="white"
                        strokeWidth="2"
                        fill="transparent"
                        r="80"
                        cx="90"
                        cy="90"
                        strokeDashoffset={setProgress()}
                        strokeDasharray={`${circumference} ${circumference}`}
                    />
                </svg>

                {value}
                <StyledLabel>{label}</StyledLabel>
            </div>
        </StyledCounter>
    );
};

export default Counter;
