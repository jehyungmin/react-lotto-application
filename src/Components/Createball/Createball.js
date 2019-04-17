import React, { Component } from 'react';
import './Createball.css';
import { CreateLottoBall } from '../CreateLottoBall';

class Createball extends Component {
    
    render() {
        const { lotto_nums, id } = this.props.info;
        const beforeStr = lotto_nums;
        const afterStr = beforeStr.split(',');
        console.log("afterStr", afterStr)

        return (
            <div className="createBall">
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
