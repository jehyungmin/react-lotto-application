import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../modules/counter';
import { bindActionCreators } from 'redux';
import './Turn.css';
import * as postActions from '../modules/post';
import {LottoBall} from 'Components/LottoBall'
import { TitleLabal } from './TitleLabal';
import { LottoballGroup } from './LottoballGroup';
// import './Button.css';

class Turn extends Component {
    static defaultProps = {
        lotto: []
    }

    constructor(props) {
        super(props);
        this.state = {
            lotto: []
        };
    }

    loadData = () => {
        const { PostActions, turn } = this.props;
        PostActions.getPost(turn);
    }

    componentDidMount() {
        // console.log("componentDidMount");
        // axios.get('/common.do?method=getLottoNumber&drwNo=852')
        // .then(res => console.log(res))
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.turn !== prevProps.turn) {
            this.loadData();
        }
    }

    // stringFormat = (number) => {
    //     number.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    //     return number;
    // }

    numberWithCommas = (n) => {
    var parts = n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
    }

    render() {
        const { CounterActions, turn, post, error, loading } = this.props;
        //console.log("123", this.state.lotto)
        // const returnValue = post.returnValue;
        // console.log('return: ', returnValue);
        // console.log('post: ', post);
        return (
            <div >
                <div className="center">
                <h2 className="turn">{turn}회차</h2>
                    <div className=""> <a href="#" className="btn btn-sm animated-button victoria-three"><p onClick={CounterActions.increment} className="fontrelation">+</p></a> </div>
                    <div className=""> <a href="#" className="btn btn-sm animated-button victoria-three"><p onClick={CounterActions.decrement} className="fontrelation">-</p></a> </div>
                </div>
                {
                    loading
                         ? (<h2>로딩중...</h2>)
                        : (
                            error
                                ? (<h2>아직 {turn}회차 발표일이 아닙니다.</h2>)
                                : (
                                    <div>
                                        <div className='lottoball-group'>
                                            {/* <LottoBall drwtNo={post.drwtNo1} />
                                            <LottoBall drwtNo={post.drwtNo2} />
                                            <LottoBall drwtNo={post.drwtNo3} />
                                            <LottoBall drwtNo={post.drwtNo4} />
                                            <LottoBall drwtNo={post.drwtNo5} />
                                            <LottoBall drwtNo={post.drwtNo6} />
                                            <LottoBall drwtNo={post.bnusNo} /> */}
                                            <LottoballGroup bollGroup = {post} />
                                            {/* {post.drwtNo1} */}
                                            {/* <LottoballGroup bollGroup={post} /> */}
                                        </div>
                                        <div className='lotooball-desc' >
                                            <TitleLabal title={'날짜'} value={post.drwNoDate} />
                                            <TitleLabal title={'총당첨금'} value={post.firstAccumamnt} />
                                            <TitleLabal title={'1등 당첨자수'} value={post.firstPrzwnerCo} />
                                             <TitleLabal title={'1등 수령액'} value={post.firstWinamnt} />
                                            {/* <TitleLabal drwtDate={post.drwNoDate}/>
                                            <TitleLabal drwtDate={post.firstAccumamnt} />
                                            <TitleLabal drwtDate={post.firstPrzwnerCo} />
                                            <TitleLabal drwtDate={post.firstWinamnt} /> */}
                                        </div>
                                        
                                        {/* <p className="sol">날짜 : {post.drwNoDate}</p>
                                        <p className="sol">총당첨금 : {post.firstAccumamnt}</p>
                                        <p className="sol">1등 당첨자수 : {post.firstPrzwnerCo}</p>
                                        <p className="sol">1등 수령액 : {post.firstWinamnt}</p> */}
                                        {/* <p>{post.returnValue}</p> */}
                                    </div>
                                )
                        )
                }
                {/* {this.state.lotto ? this._renderLotto() : "logding"}  */}
                {/* {this._renderLotto()} */}
                
            </div>
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
)(Turn);