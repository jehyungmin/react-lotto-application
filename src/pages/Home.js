import React from 'react';
import Turn from '../Components/Turn';

const Home = ({ history }) => {
    return (
        <div>
            {/* <h2>홈</h2>
            <button onClick={()=>{
                history.push('/about/javascript')
            }}>자바스크립트를 사용하여 이동</button> */}
            <Turn />
        </div>
    );
};

export default Home;