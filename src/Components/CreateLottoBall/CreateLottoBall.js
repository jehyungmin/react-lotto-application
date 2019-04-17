import React from 'react';
import './CreateLottoBall.css';

const CreateLottoBall = ({cNumber}) => {

    let styleName = 'lottoNum'
    for (var i = 0; i < 6; i++) {
        console.log('afterStr', cNumber);
        if (cNumber > 1 && cNumber <= 10) {
            styleName = 'lottoNum num-1-10'
        } else if (cNumber > 10 && cNumber <= 20) {
            styleName = 'lottoNum num-11-20'
        } else if (cNumber > 20 && cNumber <= 30) {
            styleName = 'lottoNum num-21-30'
        } else if (cNumber > 30 && cNumber <= 40) {
            styleName = 'lottoNum num-31-40'
        } else {
            styleName = 'lottoNum num-41-45'
        }
    }

    return (
        <div>
            <p className={styleName}>{cNumber}</p>
        </div>
    );
};

export default CreateLottoBall;