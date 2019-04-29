import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../modules/counter';
import * as postActions from '../modules/post';
import _ from 'underscore';
import './Game.css';
// import { update } from 'immutable';
class Game extends Component {
    state = {
        lotto_nums : [],
        chk_Click : 0,
        bonus_number: [],
        //winNumber : [],
    }  

    generate = () => {
        console.log("====== generate ======");
        let lotto_nums = [];
        _.times(45, n => lotto_nums.push(n + 1));
        lotto_nums = _.shuffle(lotto_nums);
        lotto_nums.length = 6;
        console.log('Get lotto num : ', lotto_nums);
        this.setState({
            lotto_nums: lotto_nums.sort((a, b) => { return a - b })
        });
        const { onCreate } = this.props;
        onCreate(lotto_nums);
    }

    generateWin = () => {
        console.log("====== generateWin ======");
        let lotto_nums = [];
        let bonus_number = '';
        _.times(45, n => lotto_nums.push(n + 1));
        lotto_nums = _.shuffle(lotto_nums);
        lotto_nums.length = 6;
        console.log('Get lotto num : ', lotto_nums);

        this.setState({
            lotto_nums: lotto_nums.sort((a, b) => { return a - b })
        });

        while(true){
            bonus_number = this.getRandomNum();
            this.setState({
                bonus_number: bonus_number
            });
            console.log('====bonus_number==== : ', bonus_number);

            if (this.checkDuplicatedNum(lotto_nums, bonus_number)) {
                continue
            } else {
                break
            }
        }

        const { onCreate } = this.props;

        const lotto_nums_push = lotto_nums.push(bonus_number);
        console.log(lotto_nums_push);
        console.log('====lotto_nums====', lotto_nums);
        console.log('====lotto_nums_push====', lotto_nums_push);

        onCreate(lotto_nums);
    }

    getRandomNum = () => {
        let rand_num = Math.floor(Math.random() * 45 + 1)
        return rand_num
    }

    checkDuplicatedNum = (lotto_num, ball_num) => {
        // console.log('===lotto_num===', lotto_num);
        // console.log('===ball_num===', ball_num);
        if (lotto_num.includes(ball_num)) {
            return true
        } else {
            return false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // this.props.onCreate({
        //     //lotto_nums: this.state.lotto_nums.join(', '),
        //     lotto_nums: this.state.lotto_nums,
        //     winNumber: this.state.winNumber.join(', '),
        // });
    }

    reload = (e) => {
        // e.preventDefault();
        // window.location.reload();
        const { onRemove } = this.props;
        onRemove();
    }

    onlyOne = (e) => {
        // e.preventDefault();
        // this.generate()
        // this.onClick = null;
        console.log("chk_Click:",this.state.chk_Click);
        if(this.state.chk_Click === 0){
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

    // checkDuplicatedNum = (lotto_num, ball_num) => {
    //     if(lotto_num.includes(ball_num)){
    //         return true
    //     }else {
    //         return false
    //     }
    // }

    // getWinNumberAnsBonusNumber = () => {
    //     const winNumber = this.getLottoNums();
    //     const bonus_number = this.getRandomNum();
    //     this.setState({
    //         bonus_number
    //     });
    //     while(true){
            // const bonus_number = this.getRandomNum();
            // this.setState({
            //     bonus_number
            // });

    //         if (this.checkDuplicatedNum(winNumber, bonus_number)){
    //             continue
    //         }else {
    //             break
    //         }
    //     }
    //     return winNumber, bonus_number
    // }

    // getLottoNums = () => {
    //     let winNumber = [];
    //     _.times(45, n => winNumber.push(n + 1));
    //     winNumber = _.shuffle(winNumber);
    //     winNumber.length = 6;
    //     this.setState({
    //         winNumber
    //     });
    //     return winNumber;
    // }


    checkWinLotto = (e) => {
        e.preventDefault();
        this.getWinNumberAnsBonusNumber();
        const information = this.props;
        console.log('this.props.information :', information)
    }

    render() {
        
        return (
            this.props.createWinNumberButton === "1"
                ?(
                    <form onSubmit={this.handleSubmit}>
                        <div className="center">
                            <div className="createBallBtn"> 
                                <a href="#" className="btn btn-sm animated-buttonGame victoria-threeGame">
                                    <p onClick={this.generateWin} className="fontrelation">
                                        <button className="buttonStyle fontrelation" type="submit">당첨번호</button>
                                    </p>
                                </a> 
                            </div>
                            <div className=""> 
                                <a href="#" className="btn btn-sm animated-buttonGame victoria-threeGame">
                                    <p onClick={this.reload} className="fontrelation">초기화</p>
                                </a> 
                            </div>
                        </div>
                    </form>
                )
                : 
                ( 
                    <form onSubmit={this.handleSubmit}>
                        <div className="center">
                            <div className="createBallBtn"> 
                                <a href="#" className="btn btn-sm animated-buttonGame victoria-threeGame">
                                    <p onClick={this.generate} className="fontrelation">
                                        <button className="buttonStyle fontrelation" type="submit">번호생성</button>
                                    </p>
                                </a> 
                            </div>
                            <div className=""> 
                                <a href="#" className="btn btn-sm animated-buttonGame victoria-threeGame">
                                    <p onClick={this.reload} className="fontrelation">초기화</p>
                                </a> 
                            </div>
                        </div>
                    </form>
                )
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