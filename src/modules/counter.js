import { handleActions, createAction } from 'redux-actions';

const firstDate = "2002-12-01";
const currDay = 24 * 60 * 60 * 1000;
// 1000을 나누면 초
// 60을 또 나누면 분
// 60을 또 나누면 시간
// 24를 또 나누면 일 단위

const nowDate = new Date().toISOString().substr(0,10).replace('T',' ');//현제날짜 불러오기

const dateArray1 = firstDate.split("-");
const dateArray2 = nowDate.split("-");
const dateObj1 = new Date(dateArray1[0], Number(dateArray1[1]) - 1, dateArray1[2]);//로또 시작일
const dateObj2 = new Date(dateArray2[0], Number(dateArray2[1]) - 1, dateArray2[2]);//오늘날
const betweenDate = parseInt((dateObj2.getTime() - dateObj1.getTime())/currDay/7);

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

export default handleActions({
    [INCREMENT]: (state, action) => state + 1,
    [DECREMENT]: (state, action) => state - 1

}, betweenDate)
