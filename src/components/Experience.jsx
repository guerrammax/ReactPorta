import React from 'react'

const Experience = props =>(
    <div className="Experience">
        <div className="Experience-container">

        {props.data.map((exp, index) => (
            <div className="Experience-item" key={`Exp-${index}`}>
                <h3>{exp.company}</h3>
                <span>{exp.startDate} - {exp.endDate}</span>
                <p>{exp.jobTitle}</p>
                <p>{exp.jobDescription}</p>
            </div>
        ))
        }

            
        </div>
    </div>
);

export default Experience;