import React from "react";


const Internship = (props) => {
    const handleClick = () => {
        window.location.href = props.url; // The URL you want to navigate to
      };
    return (
        <td>
            <img src={props.image} alt="Picture of the headquarters" className='HQ-Image'/>
            <h5>{props.name}</h5>
            <h6>Location: {props.location}</h6>
            <button className="Internship-Link" onClick={handleClick}>
                View Details
            </button>
        </td>
    )
}

export default Internship;