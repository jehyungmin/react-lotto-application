import React, { Component } from 'react';
import { Createball } from '../Createball';

class CreateballList extends Component {
    static defaultProps = {
        data: [],
        winData: [],
    }
   
    render() {
        const { data, winData, createWinBallList, result } = this.props;
        console.log('ballList: ', data);
        console.log('CreateballListresult', result);
        
        // const list = data.map(
            // data
            //     ? (info => (<Createball info={info} key={info.id} />))
                
            //     : (console.log('ballList-list ; ', list)),

            let count = 0;
            let resultCount = 0;
            
            // const list = data.map ( info => {
            //     return <Createball result={result} createWinBallList={createWinBallList} info={info} key={count++} />
            // } )

            const list = data.map(info => {
                console.log(info);
                // let resultCount = -1;
                // resultCount = resultCount +1;
               
                return (
                    <div>
                        <Createball 
                            createWinBallList={createWinBallList} 
                            info={info} 
                            key={count++} 
                            result={result}
                            resultCount={resultCount++}
                        />
                    </div>
                )
            })

            

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