import React, { Component } from 'react';
import { Createball } from '../Createball';

class CreateballList extends Component {
    static defaultProps = {
        data: [],
        winData: [],
    }
   
    render() {
        const { data, winData } = this.props;
        //console.log('ballList: ', data);
        
            const list = data.map(
                data
                    ? (info => (<Createball info={info} key={info.id} />))
                    
                    : (console.log('ballList-list ; ', list)),
                // winData
                //     ? (winInfo => (<Createball winInfo={winInfo} key={winInfo.id} />))
                //     : (console.log('ballList-list ; ', list))
            )
            // const winList = winData.map(
            //     winData
            //         ? (winInfo => (<Createball info={winInfo} key={winInfo.id} />))
            //         : (console.log('winballList-list ; ', winList))
            // )

        return (
            <div>
                {winData}
                {list}
            </div>
        );
    }
}

export default CreateballList;