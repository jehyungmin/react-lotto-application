import React from 'react';
import './TitleLabal.css';

const TitleLabal = ({ title, value }) => {

    const numberFormat = (value) => {
        // type=== number
        // script func -> return
        // else return value
        return value
    }
    return (
        <div className='titlelabel-wrap'>
            <div className='titlelabel-title'>
                {title}
            </div>
            :
            <div className='titlelabel-value'>
                {numberFormat(value)}
            </div>
           
        </div>
    );
};

export default TitleLabal;