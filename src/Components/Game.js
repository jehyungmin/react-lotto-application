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
class Game extends Component {
    state = {
        lotto_nums : [],
        chk_Click : 0,
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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate({
            lotto_nums: this.state.lotto_nums.join(', '),
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
            return this.generate();
        }else {
            e.preventDefault();
            return this.onClick=null;
        }
        
    }
    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <button onClick={this.onlyOne}>당첨번호 조회</button>
                <button type="submit" onClick={this.generate}>번호생성</button>
                <button onClick={this.reload}>초기화</button>
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