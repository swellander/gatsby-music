import React from 'react';

function Gig(props) {
    return (
        <div>
            <a href={props.eventLocation}>
                <h3>{props.date}</h3>
                <h5>{props.title}</h5>
                <p>{props.location} - {props.time}</p>
            </a>
        </div>
    )
}

export default Gig;