import React from 'react';
import { LottoBall } from 'Components/LottoBall';
import './LottoballGroup.css';

const LottoballGroup = ({ bollGroup }) => {
    return (
        <div className="lottoBallGroup">
            <LottoBall drwtNo={bollGroup.drwtNo1}/>
            <LottoBall drwtNo={bollGroup.drwtNo2} />
            <LottoBall drwtNo={bollGroup.drwtNo3} />
            <LottoBall drwtNo={bollGroup.drwtNo4} />
            <LottoBall drwtNo={bollGroup.drwtNo5} />
            <LottoBall drwtNo={bollGroup.drwtNo6} />
            <LottoBall drwtNo={bollGroup.bnusNo} />
        </div>
    );
};

export default LottoballGroup;