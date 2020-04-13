const getTime = (targetDate: Date) => {
    const currentDate = new Date();
    if (currentDate > targetDate) {
        return {
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    const time = new Date(currentDate.getTime());
    let months: number;
    let days: number;

    months =
        (targetDate.getFullYear() - currentDate.getFullYear()) * 12 -
        (currentDate.getMonth() + 1) +
        targetDate.getMonth();

    time.setMonth(currentDate.getMonth() + 1);
    time.setDate(0);

    if (currentDate.getMonth() === targetDate.getMonth()) {
        days = targetDate.getDate() - currentDate.getDate() - 1;
    } else {
        days =
            time.getDate() > currentDate.getDate()
                ? time.getDate() - currentDate.getDate()
                : 0;
    }

    return {
        months: months < 0 ? 0 : months,
        days,
        hours: 24 - currentDate.getHours() - 1,
        minutes: 60 - currentDate.getMinutes() - 1,
        seconds: 60 - currentDate.getSeconds()
    };
};

export default getTime;
