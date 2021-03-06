import React from 'react'

const Education = props => (
    <div className="Education">
        <div className="Education-container">

            {props.data.map( (edu, index) => (
                <div className="Education-item" key={`Edu-${index}`}>
                <h3>{edu.degree} {edu.institution}</h3>
                <span>{edu.startDate} - {edu.endDate}</span>
                <p>Desarrollando react</p>
            </div>
            ))}

        </div>
    </div>    
);

export default Education;