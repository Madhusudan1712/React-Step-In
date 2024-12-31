import { useState } from "react";

function UpdateArray(){
    const avaliableFrunts = {Apple:80, Orange:50, Banana:40, Pinapple:20, Pomegranate:100};
    const [fruits, setFruits] = useState([]);
    const [selectedFruit, setSelectedFruit] = useState("Select the fruits");

    const handelChangeEvnet = (e) => {
        setSelectedFruit(e.target.value);
    }
    const handleAddChange = () => {
        if(selectedFruit !== "Select the fruits" && !fruits.includes(selectedFruit)) {
            setFruits((f) => [...f, selectedFruit])
            setSelectedFruit("Select the fruits")
        }
    }
    const handleRemoveChange = () => {
        if(selectedFruit !== "Select the fruits" && fruits.includes(selectedFruit)) {
            setFruits(fruits.filter((fruit) => fruit != selectedFruit))
            setSelectedFruit("Select the fruits")
        }
    }
    return(
       <div className="fruitCart">
            <div className="cartItems">
                <h1>Fruits cart</h1>
                <ol>{fruits.map((fruit, index) => <li key={index}>{fruit}</li> )}</ol>
            </div>
            <select name="fruits" id="availableFruits" onChange={handelChangeEvnet} value={selectedFruit}>
                    <option>{selectedFruit}</option>
                    {Object.keys(avaliableFrunts).map((fruit, index) => 
                    <option id={"opt"+index} key={index} value={fruit +" "+ avaliableFrunts[fruit] +"Rs/kg"}>{fruit} {avaliableFrunts[fruit]} Rs/kg</option>)}
            </select>
            <button onClick={handleAddChange}>+</button> <button onClick={handleRemoveChange}>-</button>
        </div>
    );
}

export default UpdateArray