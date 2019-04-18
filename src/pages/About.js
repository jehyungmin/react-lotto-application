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
        information: [],
        winInformation: [],
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
        window.location.reload()
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
        const information = this.state.information
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
                <Game onCreate={this.handleCreate}/>
                <CreateballList
                    data={this.state.information}
                    winData={this.state.winInformation}
                />
                
                
         </div>
        );
    }
}

export default About;