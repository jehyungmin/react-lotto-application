import React, { Component } from 'react';
import queryString from 'query-string';
import Game from '../Components/Game';
import CreateballList from '../Components/CreateballList/CreateballList';
// import { WinNumber } from '../Components/WinNumber';


class About extends Component {
    // id = 0;
    state = {
        information: [],   // [1, 2, 3, 4, 5]
        winInformation: [],
        results: [],
        winningResult:[],
        data_bonus_number:'',
        dataSix:[],
        nowGameBall:[],

        //createWinNumber:1,
    }

    handleCreate = (data) => {
        console.log("About_data :",data);
        const { information } = this.state;
        this.setState({
            information: information.concat({
                ...data,
                // id: this.id++
            })
        })
    }

    handleGameCreate = (data) => {
        console.log("====== handleGameCreate ======")
        console.log("About_data :", data);
        const { information } = this.state;
        this.setState({
            information: information.concat(
                [data]
                // id: this.id++
            // game.number: game.number.concat([data])
            )
        })

        console.log("state : ", this.state);
    }

    handleDrawCreate = async (data) => {
        console.log("====== handleDrawCreate ======")
        console.log("About_data :", data);
        let data_bonus_number = data[6];

        const dataSix = [data[0], data[1], data[2], data[3], data[4], data[5]];
        
        console.log("About_data :", [data]);

        // state에 당첨번호 저장
        await this.setState({
            winInformation: [data],
            dataSix: dataSix,
            data_bonus_number: data_bonus_number
        })

        const { information } = this.state;
        // 당첨번호랑 게임들이랑 비교하자.
        // 게임들 수만큼 반복하자
        let games = -1;
        let result = [] ;
        let winningResult = [];
        information.map( game => {
            // 각 게임마다 담청결과랑 비교하자
            console.log(" data : ", data);
            console.log(" dataSix : ", dataSix);
            console.log(" game : ", game);
            this.setState({
                nowGameBall: game
            });
            console.log("nowGameBall", this.state.nowGameBall);
            //console.log(game.numbers)
            // 일치하는 갯수
            let count = 0;
            games = games + 1
            dataSix.map( drawNum => {
                //console.log('drawNum', data[6]);
                //console.log('data.length : ', data.length = 7);
                
                game.map( gameNum => {
                    // 일치하는 갯수를 새자.
                    if( drawNum === gameNum) {
                        count = count + 1;
                    }
                })
            })
            // 갯수만큼 등수를 매겨서 result에 저장하자.
            result[games] = count;
            console.log('result', result);

            winningResult = winningResult.concat(this.getWinningResult(count));
            console.log('winningResult', winningResult);

        })

         // 결과를 state에 저장하자.
        console.log('result : ', result);
        this.setState({
            results: result
        });
        this.setState({
            winningResult: winningResult
        });
    }

    handleWinNumCreate = (winData) => {
        console.log("About_winData :", winData);
        const { winInformation } = this.state;
        this.setState({
            winInformation: winInformation.concat({
                ...winData,
                // id: this.id++
            })
        })
    }

    handleRemove=() => {

    }

    handleDrawRemove = () => {
        this.setState({
            winInformation: []
        })
    }

    handleGameRemove = () => {
        this.setState({
            information: [],
            winningResult:[]
        })
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

    getWinningResult = (count) => {
        switch(count){
            case 6:
                return '1등'
            case 5:
                if (this.checkDuplicatedNum(this.state.nowGameBall, this.state.data_bonus_number)){
                    return "2등"
                } else {
                    return "3등"
                }
            case 4:
                return '4등'
            case 3:
                return '5등'
            default:
                return '꽝'
        }
    }

    render() {
        const {location} = this.props;
        const query = queryString.parse(location.search);
        //const information = this.state.information
        const { information } = this.state;
        const infoLength = information.length;
        console.log("information", this.state.information);
        console.log("information_length : ", information[(infoLength)-1])
        

        const {color} = query;
        return (
            <div>
                 {/* About {match.params.name} */}
                <h2 style={{color}}>Lotto 번호생성기</h2>
                {/* <button onClick={this.winNumCreate} >당첨번호</button> */}
                {/* <WinNumber onWinCreate={this.handleWinNumCreate}/> */}
                {/* <Game onCreate={this.handleCreate} onWinCreate={this.handleWinNumCreate} /> */}
                <Game 
                    createWinNumberButton = "1"
                    onCreate={this.handleDrawCreate}
                    onRemove={this.handleDrawRemove}
                />
                <CreateballList
                    createWinBallList = "1"
                    data={this.state.winInformation}
                // winData={this.state.winInformation}
                />

                <Game 
                    onCreate={this.handleGameCreate} 
                    onRemove={this.handleGameRemove}
                />
                <CreateballList
                    data={this.state.information}
                    // winData={this.state.winInformation}
                    result={this.state.winningResult}
                />   
                
         </div>
        );
    }
}

export default About;