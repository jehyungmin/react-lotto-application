import React, { Component } from 'react';
import './Createball.css';
import { CreateLottoBall } from '../CreateLottoBall';

class Createball extends Component {
    
    render() {
        const { info } = this.props;
        console.log('CreageBall info : ', info);
        // const { lotto_nums, id } = this.props.info;
        // //const { winLotto_nums } = this.props.winInfo;
        // const beforeStr = lotto_nums;
        // //const winBeforeStr = winLotto_nums;
        // console.log("befreStr : ", beforeStr)
        // // const afterStr = beforeStr.split(',');
        // const afterStr= lotto_nums;
        // //const winAfterStr = winBeforeStr.split(',');
        // console.log("afterStr", afterStr);
        //console.log("winAfterStr", winAfterStr);

        return (
            <div className="createBall">
                {/* winAfterStr
                ?(
                    <CreateLottoBall cNumber={winAfterStr[0]} />
                    <CreateLottoBall cNumber={winAfterStr[1]} />
                    <CreateLottoBall cNumber={winAfterStr[2]} />
                    <CreateLottoBall cNumber={winAfterStr[3]} />
                    <CreateLottoBall cNumber={winAfterStr[4]} />
                    <CreateLottoBall cNumber={winAfterStr[5]} />
                )
                :(
                    <CreateLottoBall cNumber={afterStr[0]} />
                    <CreateLottoBall cNumber={afterStr[1]} />
                    <CreateLottoBall cNumber={afterStr[2]} />
                    <CreateLottoBall cNumber={afterStr[3]} />
                    <CreateLottoBall cNumber={afterStr[4]} />
                    <CreateLottoBall cNumber={afterStr[5]} />
                    ) */}
                <CreateLottoBall cNumber={info[0]} />
                <CreateLottoBall cNumber={info[1]} />
                <CreateLottoBall cNumber={info[2]} />
                <CreateLottoBall cNumber={info[3]} />
                <CreateLottoBall cNumber={info[4]} />
                <CreateLottoBall cNumber={info[5]} />
            </div>
            
        );
    }
}

export default Createball;
