import React, { Component } from 'react';
import { Createball } from '../Createball';


class CreateballList extends Component {
    static defaultProps = {
        data: []
    }
    render() {
        const { data } = this.props;
        console.log('ballList: ', data)
        const list = data.map(

            info => (<Createball info={info} key={info.id} />)
        )
        console.log('ballList-list ; ', list)
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default CreateballList;