import React, { Component } from 'react';
import _ from 'underscore';

class WinNumber extends Component {
    state = {
        lotto_nums: [],
        chk_Click: 0,
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
        this.props.onWinCreate({
            lotto_nums: this.state.lotto_nums.join(', '),
        });
    }

    onlyOne = (e) => {
        console.log("chk_Click:", this.state.chk_Click);
        if (this.state.chk_Click == 0) {
            this.setState({
                ...this.state,
                chk_Click: 1
            })
            return this.generate();
        } else {
            e.preventDefault();
            return this.onClick = null;
        }

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button onClick={this.onlyOne}>당첨번호 조회</button>
            </form>
        );
    }
}

export default WinNumber;