import React from'react';
import './LottoBall.css';


const LottoBall = ({drwtNo}) => {
    
    let styleName ='lottoNum'
    if(drwtNo > 1 && drwtNo <= 10){
        styleName = 'lottoNum num-1-10'
    } else if (drwtNo > 10 && drwtNo <= 20) {
        styleName = 'lottoNum num-11-20'
    } else if (drwtNo > 20 && drwtNo <= 30) {
        styleName = 'lottoNum num-21-30'
    } else if (drwtNo > 30 && drwtNo <= 40) {
        styleName = 'lottoNum num-31-40'
    }else{
        styleName = 'lottoNum num-41-45'
    }
     
    return (
        <div>
            <p className={styleName}>{drwtNo}</p>
        </div>
    )
}

export default LottoBall;