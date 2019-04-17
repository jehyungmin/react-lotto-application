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


class About extends Component {
    // id = 0;
    state = {
        information: [],
    }

    handleCreate = (data) => {
        console.log(data);
        const { information } = this.state;
        this.setState({
            information: information.concat({
                ...data,
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

    render() {
        const {location, match} = this.props;
        const query = queryString.parse(location.search);
        console.log(query);

        const {color} = query;
        return (
            <div>
                 {/* About {match.params.name} */}
                <h2 style={{color}}>뭔가 넣을꺼야</h2>
                <Game onCreate={this.handleCreate} />
                <CreateballList
                    data={this.state.information}
                />
                
                
         </div>
        );
    }
}

export default About;