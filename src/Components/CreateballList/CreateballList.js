import React, { Component } from 'react';
import { Createball } from '../Createball';

class CreateballList extends Component {
    static defaultProps = {
        data: [],
        winData: [],
    }
   
    render() {
        const { data, winData } = this.props;
        console.log('ballList: ', data);
        
        // const list = data.map(
            // data
            //     ? (info => (<Createball info={info} key={info.id} />))
                
            //     : (console.log('ballList-list ; ', list)),

            let count = 0;
        const list = data.map ( info => {
            return <Createball info={info} key={count++} />
        } )

            // winData
            //     ? (winInfo => (<Createball winInfo={winInfo} key={winInfo.id} />))
            //     : (console.log('ballList-list ; ', list))
        
            // const winList = winData.map(
            //     winData
            //         ? (winInfo => (<Createball info={winInfo} key={winInfo.id} />))
            //         : (console.log('winballList-list ; ', winList))
            // )

            // console.log("list : ", list);
        return (
            <div>
                {winData}
                {
                    list !== null && list
                }
               
            </div>
        );
    }
}

export default CreateballList;