import React from "react";


const Internship = (props) => {
    return (
        <td>
            <h5>{props.name}</h5>
            <h6>Deadline: {props.deadline}</h6>
        </td>
    )
}

export default Internship;