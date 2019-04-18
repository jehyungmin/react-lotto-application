import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../modules/counter';
import * as postActions from '../modules/post';
import { LottoBall } from 'Components/LottoBall'
import { TitleLabal } from './TitleLabal';
import { LottoballGroup } from './LottoballGroup';
import { Createball } from './Createball';
import _ from 'underscore';
import './Game.css';
class Game extends Component {
    state = {
        lotto_nums : [],
        chk_Click : 0,
        winNumber : [],
        bonus_number : 0,

    }

    generate = () => {
        let lotto_nums = [];
        _.times(45, n => lotto_nums.push(n + 1));
        lotto_nums = _.shuffle(lotto_nums);
        lotto_nums.length = 6;
        this.setState({
            lotto_nums
        });
    }

    winGenerate = () => {
        let winNumber = [];
        _.times(45, n => winNumber.push(n + 1));
        winNumber = _.shuffle(winNumber);
        winNumber.length = 6;
        this.setState({
            winNumber
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate({
            lotto_nums: this.state.lotto_nums.join(', '),
            winNumber: this.state.winNumber.join(', '),
        });
    }

    winHandleSubmit = (e) => {
        e.preventDefault();
        this.props.onWinCreate({
            winNumber : this.state.winNumber.join(', '),
        });
    }

    reload = (e) => {
        e.preventDefault();
        window.location.reload();
    }

    onlyOne = (e) => {
        // e.preventDefault();
        // this.generate()
        // this.onClick = null;
        console.log("chk_Click:",this.state.chk_Click);
        if(this.state.chk_Click == 0){
            this.setState({
                ...this.state,
               chk_Click : 1
            })
            //this.winGenerate();
            // this.state.lotto_nums.unshift(this.state.winNumber);
            // this.setState({
            // });            
        
            return this.generate();
        }else {
            e.preventDefault();
            return this.onClick=null;
        }
        
        
    }

    getRandomNum = () => {
        let rand_num = Math.floor(Math.random() * 45 + 1)
        return rand_num
    }

    checkDuplicatedNum = (lotto_num, ball_num) => {
        if(lotto_num.includes(ball_num)){
            return true
        }else {
            return false
        }
    }

    getWinNumberAnsBonusNumber = () => {
        const winNumber = this.getLottoNums();
        const bonus_number = this.getRandomNum();
        this.setState({
            bonus_number
        });
        while(true){
            // const bonus_number = this.getRandomNum();
            // this.setState({
            //     bonus_number
            // });

            if (this.checkDuplicatedNum(winNumber, bonus_number)){
                continue
            }else {
                break
            }
        }
        return winNumber, bonus_number
    }

    getLottoNums = () => {
        let winNumber = [];
        _.times(45, n => winNumber.push(n + 1));
        winNumber = _.shuffle(winNumber);
        winNumber.length = 6;
        this.setState({
            winNumber
        });
        return winNumber;
    }


    checkWinLotto = (e) => {
        e.preventDefault();
        this.getWinNumberAnsBonusNumber();
        const information = this.props;
        console.log('this.props.information :', information)
    }

    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <button type="submit" onClick={this.generate}>번호생성</button> */}
                {/* <button onClick={this.onlyOne}>당첨번호 조회</button> */}
                {/* <button onClick={this.checkWinLotto}>결과보기</button> */}
                {/* <button onClick={this.reload}>초기화</button> */}
                <div className="center">
                    <div className="createBallBtn"> <a href="#" className="btn btn-sm animated-buttonGame victoria-threeGame"><p onClick={this.generate} className="fontrelation"><button className="buttonStyle fontrelation" type="submit">번호생성</button></p></a> </div>
                    <div className=""> <a href="#" className="btn btn-sm animated-buttonGame victoria-threeGame"><p onClick={this.reload} className="fontrelation">초기화</p></a> </div>
                </div>
            </form>
        );
    }
}

export default connect(
    (state) => ({
        turn: state.counter,
        post: state.post.data,
        loading: state.post.pending,
        error: state.post.error,
        //id: state.post.id
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(Game);