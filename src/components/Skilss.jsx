import React from 'react';

const Skilss = props => (
    <div className="Skilss">
        <div className="Skilss-container">

            {props.data.map((skill, index) => (
                <div className="Skilss-item" key={`Skills=${index}`}>
                    <h3>{skill.name}</h3>
                    <div className="Skilss-item">
                        <span>{skill.percentage}</span>
                    </div>
                </div>
            )

            )

            }


        </div>
    </div>
);

export default Skilss;