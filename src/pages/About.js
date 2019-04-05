import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);

    const {color} = query;
    return (
        <div>
            {/* About {match.params.name} */}
            <h2 style={{color}}>뭔가 넣을꺼야</h2>
        </div>
    );
};

export default About;