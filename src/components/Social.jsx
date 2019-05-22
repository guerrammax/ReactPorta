import React from 'react'

const Social = props => (
    <div className="Social">
        {props.social &&
        <ul>
            {props.social.map( ()=>(
                <li  key={`Social-${index}`} target="_black">
                    <a href="{item.url}">
                        {item.name}
                    </a>
                </li>
            )

            )}
        </ul>

        }
    </div>
);

export default Social;
