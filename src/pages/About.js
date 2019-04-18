// import React from 'react';
// import queryString from 'query-string';
// import Game from '../Components/Game';

// const About = ({location, match}) => {
//     const query = queryString.parse(location.search);
//     console.log(query);

//     const {color} = query;
//     return (
//         <div>
//             {/* About {match.params.name} */}
//             <h2 style={{color}}>뭔가 넣을꺼야</h2>
//             <Game />
//         </div>
//     );
// };

// export default About;

import React, { Component } from 'react';
import queryString from 'query-string';
import Game from '../Components/Game';
import CreateballList from '../Components/CreateballList/CreateballList';
import { WinNumber } from '../Components/WinNumber';


class About extends Component {
    // id = 0;
    state = {
        information: [],   // [1, 2, 3, 4, 5]
        /*
        games : [{
            numbers: [],   // [1,2,3,4,5]
            grade: null,   // 1등
        }]
        */
        winInformation: [],
        results: [],
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
        // const { winInformation } = this.state;
        console.log("About_data :", [data]);
        // state에 당첨번호 저장
        await this.setState({
            winInformation: [data]
        })

        const { information } = this.state;
        // 당첨번호랑 게임들이랑 비교하자.
        // 게임들 수만큼 반복하자
        let games = -1;
        let result = [] ;
        information.map( game => {
            // 각 게임마다 담청결과랑 비교하자
            console.log(" game : ", game)
            //console.log(game.numbers)
            // 일치하는 갯수
            let count = 0;
            games = games + 1
            data.map( drawNum => {
                game.map( gameNum => {
                    // 일치하는 갯수를 새자.
                    if( drawNum === gameNum) {
                        count = count + 1;
                    }
                })
            })
            // 갯수만큼 등수를 매겨서 result에 저장하자.
            result[games] = count;
        })

         // 결과를 state에 저장하자.
        console.log('result : ', result);
        this.setState({
            results: result
        })


        
        
       

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
        // const {information} = this.state;
        // this.setState({

        // })
        
    }

    handleDrawRemove = () => {
        this.setState({
            winInformation: []
        })
    }

    handleGameRemove = () => {
        this.setState({
            information: []
        })
    }

    // winNumCreate = () => {
    //     console.log("winNumCreate")
    //     const information = this.state.information
    //     const infoLength = information.length;
    //     this.setState({
    //         ...this.state,
    //         winInformation: information[(infoLength) - 1]
    //     })
    // }

    render() {
        const {location, match} = this.props;
        const query = queryString.parse(location.search);
        //const information = this.state.information
        const { information, winInformation } = this.state;
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
                    onCreate={this.handleDrawCreate}
                    onRemove={this.handleDrawRemove}
                />
                <CreateballList
                    data={this.state.winInformation}
                // winData={this.state.winInformation}
                />



                <Game onCreate={this.handleGameCreate} onRemove={this.handleGameRemove}/>
            
                <CreateballList
                    data={this.state.information}
                    // winData={this.state.winInformation}
                />
                
                
         </div>
        );
    }
}

export default About;