import React from "react";
import PropTypes from "prop-types"

function Student(props) {
    const recods = {
        status: (props.status) ? "Active" : "Not Active"
    }
    return (
    <>
        <h1>Name: {props.name}</h1>
        <h2>Age: {props.age}</h2>
        <h2>Status: {recods.status}</h2>
        <hr/>
    </>
    );
}

Student.proptypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
}

Student.defaultProps = {
    name:"Guset",
    age:0,
    status: false
}

export default Student