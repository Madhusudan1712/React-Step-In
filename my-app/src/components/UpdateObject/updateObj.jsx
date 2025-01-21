import { useState } from "react";

function UpdateObj() {
    const[basicInfo, setBasicInfo] = useState({name:"Guset", age:0, address:"Space"});

    const updateNameChange = (e) => {
        setBasicInfo((b)=>({...b, name:e.target.value})); //... spread
    }
    const updateAgeChange = (e) => {
        setBasicInfo((b) => ({...b, age:e.target.value}));
    }
    const updateAddressChange = (e) => {
        setBasicInfo((b) => ({...b, address: e.target.value}));
    }
    return(
        <>
            <h1>Hi...! <br /> My name is {basicInfo.name}, I'm {basicInfo.age} yaers old and I am comming from {basicInfo.address}.</h1>

            <label>Name: </label>
            <input type="text" name="userName" id="userName" onChange={updateNameChange} /><br />
            
            <label>Age: </label>
            <input type="number" name="userAge" id="userAge" onChange={updateAgeChange}/><br />
            
            <label>Address: </label>
            <input type="text" name="userAddress" id="userAddress" onChange={updateAddressChange} />
        </>
    );
}

export default UpdateObj