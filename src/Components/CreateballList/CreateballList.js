import React, { Component } from 'react';
import { Createball } from '../Createball';


class CreateballList extends Component {
    static defaultProps = {
        data: []
    }
    render() {
        const { data } = this.props;
        console.log('ballList: ', data);
        // const list = data.map(

        //     info => (<Createball info={info} key={info.id} />)
        // )
        // console.log('ballList-list ; ', list)
        //console.log('data ; ', data[0])

        const beforStr = data;
        // const afterStr = beforStr.split(',');
        // const afterStr = beforStr.split(',');

        // console.log('CreateballList-afterStr : ', afterStr);


        return (
            <div>
                {/* {list} */}
                
            </div>
        );
    }
}

export default CreateballList;