import React, { Component } from 'react';
import './Createball.css';
import { CreateLottoBall } from '../CreateLottoBall';

class Createball extends Component {
    
    render() {
        const { info, createWinBallList, result, resultCount} = this.props;
        // console.log('CreageBall info : ', info);
        // console.log('createWinBallList : ', createWinBallList);

        return (
            createWinBallList === "1"
                ?(
                    <div className="createBall">
                        <CreateLottoBall cNumber={info[0]} />
                        <CreateLottoBall cNumber={info[1]} />
                        <CreateLottoBall cNumber={info[2]} />
                        <CreateLottoBall cNumber={info[3]} />
                        <CreateLottoBall cNumber={info[4]} />
                        <CreateLottoBall cNumber={info[5]} />
                        <p className="pluse">+</p>
                        <CreateLottoBall cNumber={info[6]} />
                    </div>
                )
                :(
                    <div>
                        <div className="createBall">
                            <CreateLottoBall cNumber={info[0]} />
                            <CreateLottoBall cNumber={info[1]} />
                            <CreateLottoBall cNumber={info[2]} />
                            <CreateLottoBall cNumber={info[3]} />
                            <CreateLottoBall cNumber={info[4]} />
                            <CreateLottoBall cNumber={info[5]} />
                            <p className="result">{result[resultCount]}</p>
                        </div>
                        
                    </div>
                )
        );
    }
}

export default Createball;
