import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Lotto from './Components/Lotto';

class App extends Component {
  state ={

  }

  componentDidMount() {
    // axios.get('/common.do?method=getLottoNumber&drwNo=852')
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
    this._getLotto();
  }

  _getLotto = async () => {
    const lotto = await this._collApi();
    this.setState({
      lotto
    });
  }

  _collApi = () => {
    return axios.get('/common.do?method=getLottoNumber&drwNo=852')
      .then(response => console.log('response : ', response))
      //.then(response => response.json())
      //.then(json => json.data)
      .catch(err => console.log(err))
  }

  _renderLotto = () => {
    const lotto = this.state.lotto.map((data) => {
      return <Lotto 
        num1={data.drwtNo1}
        num2={data.drwtNo2}
        num3={data.drwtNo3}
        num4={data.drwtNo4}
        num5={data.drwtNo5}
        num6={data.drwtNo6}
        bnus={data.bnusNo}
      />
    })
    return lotto;
  }

  render() {
    const {lotto} = this.state;
    return (
      <div className={lotto ? "App" : "App-logging"}>
        {this.state.lotto ? this._renderLotto() : "logding"} 
      </div>
    );
  }
}

export default App;
