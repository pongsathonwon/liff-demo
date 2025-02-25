import { TDate } from "../types";

export const getDateObject = (isodate?: string) => {
    if (!isodate) {
        isodate = (new Date()).toISOString();
    }
    const dateArray = isodate.split("T")[0].split("-");
    const [year, month, day] = dateArray.map(Number);
    return { day, month, year };
};

export const getToday = () => new Date().toISOString().split('T')[0]

export const getFDOM = () => getFormattedDate({ ...getDateObject(), day: 1 })

export const getFormattedDate = ({ day, month, year }: TDate) => String(year).padStart(4, '0') + "-" + String(month).padStart(2, '0') + "-" + String(day).padStart(2, '0')

const getTotalDay = (month: number, year: number) => {
    if ([1, 3, 5, 7, 8, 10, 12].includes(month)) return 31;
    if ([4, 6, 9, 11].includes(month)) return 30;
    if (month === 2) {
        return getFeb(year);
    }
    throw new Error("invalid date");
};

const getFeb = (year: number) => {
    if (year % 4 === 0) {
        return 29;
    }
    return 28;
};

export const getNumberList = (num: number) => [...Array(num)].map((_, idx) => idx + 1);
export const getDateList = (month: number, year: number) => getNumberList(getTotalDay(month, year))
export const getMonthList = () => getNumberList(12);