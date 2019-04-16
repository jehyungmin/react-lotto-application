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

    reload = () => {
        window.location.reload();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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