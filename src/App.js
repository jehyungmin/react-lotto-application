// import React, { Component } from 'react';
// import './App.css';
// // import axios from 'axios';
// //import Lotto from './Components/Lotto';

// import { connect } from 'react-redux';
// import * as counterActions from './modules/counter';
// import { bindActionCreators } from 'redux';
// import * as postActions from './modules/post';

// class App extends Component {
//   static defaultProps ={
//     lotto: []
//   }

//   constructor(props) {
//     super(props);
//     this.state ={
//       lotto:[]
//     };
//   }

//   // componentWillMount() {
//   //   console.log("componentWillMount");
//   //   axios.get('/common.do?method=getLottoNumber&drwNo=852').then(res => {
//   //     this.setState({lotto:res.data});
//   //   });
//   // }

//   loadData = () => {
//     const { PostActions, turn } = this.props;
//     PostActions.getPost(turn);
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     // axios.get('/common.do?method=getLottoNumber&drwNo=852')
//     // .then(res => console.log(res))
//     this.loadData();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.props.turn !== prevProps.turn) {
//       this.loadData();
//     }
//   }
  
//   //_renderLotto = () => {
//     //const lotto = this.state.lotto.map((data) => {
//       // const lotto = this.state.lotto;
//       // return <Lotto 
//       //   num1={lotto.drwtNo1}
//       //   num2={lotto.drwtNo2}
//       //   num3={lotto.drwtNo3}
//       //   num4={lotto.drwtNo4}
//       //   num5={lotto.drwtNo5}
//       //   num6={lotto.drwtNo6}
//       //   bnus={lotto.bnusNo}
//       // />
//     //})
//     //return lotto;
//   //}

//   render() {
//     //const {lotto} = this.state;
//     const {CounterActions, turn, post, error, loading} = this.props;
//     //console.log("123", this.state.lotto)
//     return (

//       <div >
//         <h1>{turn}회차</h1>
//         <button onClick={CounterActions.increment}>+</button>
//         <button onClick={CounterActions.decrement}>-</button>
//         {
//           loading
//             ? (<h2>로딩중...</h2>)
//             : (
//               error
//                 ? (<h2>오류발생!</h2>)
//                 : (
//                   <div>
//                     <p>{post.drwtNo1}</p>
//                     <p>{post.drwtNo2}</p>
//                     <p>{post.drwtNo3}</p>
//                     <p>{post.drwtNo4}</p>
//                     <p>{post.drwtNo5}</p>
//                     <p>{post.drwtNo6}</p>
//                     <p>{post.bnusNo}</p>
//                     <p>{post.drwNoDate}</p>
//                   </div>
//                 )
//             )
//         }
//         {/* {this.state.lotto ? this._renderLotto() : "logding"}  */}
//         {/* {this._renderLotto()} */}
//       </div>
//     );
//   }
// }

// export default connect(
//   (state) => ({
//     turn: state.counter,
//     post: state.post.data,
//     loading: state.post.pending,
//     error: state.post.error,
//     //id: state.post.id
//   }),
//   (dispatch) => ({
//     CounterActions: bindActionCreators(counterActions, dispatch),
//     PostActions: bindActionCreators(postActions, dispatch)
//   })
// )(App);


import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About} from 'pages';
// import axios from 'axios';
import Menu from './Components/Menu';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div><h1>HyungMin Lotto!!!</h1></div>
        <Menu className="MenuCss" />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    );
  }
}

export default App;
