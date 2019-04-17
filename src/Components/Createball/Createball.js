import React, { Component } from 'react';
import './Createball.css';
import { CreateLottoBall } from '../CreateLottoBall';

class Createball extends Component {
    
    render() {
        const { lotto_nums, id } = this.props.info;
        const beforeStr = lotto_nums;
        const afterStr = beforeStr.split(',');
        console.log("afterStr", afterStr)

        // let styleName = 'lottoNum'
        // for(var i = 0; i < afterStr.length; i++){
        //     console.log('afterStr' ,afterStr[i]);
        //         if (afterStr[i] > 1 && afterStr[i] <= 10){
        //             styleName = 'lottoNum num-1-10'
        //         } else if (afterStr[i] > 10 && afterStr[i] <= 20) {
        //             styleName = 'lottoNum num-11-20'
        //         } else if (afterStr[i] > 20 && afterStr[i] <= 30) {
        //             styleName = 'lottoNum num-21-30'
        //         } else if (afterStr[i] > 30 && afterStr[i] <= 40) {
        //             styleName = 'lottoNum num-31-40'
        //         } else {
        //             styleName = 'lottoNum num-41-45'
        //         }
        // }

        return (
            <div className="createBall">
                {/* <div className={styleName} >{afterStr[0]}</div>
                <div className={styleName} >{afterStr[1]}</div>
                <div className={styleName} >{afterStr[2]}</div>
                <div className={styleName} >{afterStr[3]}</div>
                <div className={styleName} >{afterStr[4]}</div>
                <div className={styleName} >{afterStr[5]}</div> */}
                <CreateLottoBall cNumber={afterStr[0]} />
                <CreateLottoBall cNumber={afterStr[1]} />
                <CreateLottoBall cNumber={afterStr[2]} />
                <CreateLottoBall cNumber={afterStr[3]} />
                <CreateLottoBall cNumber={afterStr[4]} />
                <CreateLottoBall cNumber={afterStr[5]} />
            </div>
            
        );
    }
}

export default Createball;

// import React from 'react';
// import './Createball.css';

// const Createball = ({info, id}) => {

//     let styleName = 'lottoNum'
//     if (info > 1 && info <= 10) {
//         styleName = 'lottoNum num-1-10'
//     } else if (info > 10 && info <= 20) {
//         styleName = 'lottoNum num-11-20'
//     } else if (info > 20 && info <= 30) {
//         styleName = 'lottoNum num-21-30'
//     } else if (info > 30 && info <= 40) {
//         styleName = 'lottoNum num-31-40'
//     } else {
//         styleName = 'lottoNum num-41-45'
//     }
    

//     return (
//         <div>
//             <div className={styleName}>{info.lotto_nums}</div>
//         </div>
//     );
// };

// export default Createball;