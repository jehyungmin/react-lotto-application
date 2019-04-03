import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Lotto from './Components/Lotto';

class App extends Component {
  static defaultProps ={
    lotto: []
  }

  constructor(props) {
    super(props);
    this.state ={
      lotto:[]
    };
  }

  componentWillMount() {
    console.log("componentWillMount");
    axios.get('/common.do?method=getLottoNumber&drwNo=852').then(res => {
      this.setState({lotto:res.data});
    });
  }

  componentDidMount() {
    // axios.get('/common.do?method=getLottoNumber&drwNo=852')
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
    //this._getLotto();
    console.log("componentDidMount");
  }

  // _getLotto = async () => {
  //   const lotto = await this._collApi();
  //   this.setState({
  //     lotto
  //   });
  // }

  // _collApi = () => {
  //   return axios.get('/common.do?method=getLottoNumber&drwNo=852')
  //     .then(response => console.log('response : ', response))
  //     .then(response => response.json())
  //     .then(json => json.data)
  //     //.then(json => json.data)
  //     .catch(err => console.log(err))
  // }

  _renderLotto = () => {
    //const lotto = this.state.lotto.map((data) => {
      return <Lotto 
        num1={this.state.lotto.drwtNo1}
        num2={this.state.lotto.drwtNo2}
        num3={this.state.lotto.drwtNo3}
        num4={this.state.lotto.drwtNo4}
        num5={this.state.lotto.drwtNo5}
        num6={this.state.lotto.drwtNo6}
        bnus={this.state.lotto.bnusNo}
      />
    //})
    //return lotto;
  }

  render() {
    const {lotto} = this.state;
    console.log("123", this.state.lotto)
    return (
      <div className={lotto ? "App" : "App-logging"}>
        {this.state.lotto ? this._renderLotto() : "logding"} 
        {/* {this._renderLotto()} */}
      </div>
    );
  }
}

export default App;
