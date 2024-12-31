import { useState } from "react";

function ColorPicker(){
    const [color, setColor] = useState('#FFFFFF');

    const handleColorChage = (e) => {
        setColor(e.target.value);
    }

    return(
        <div className="colorPickerContainer">
            <h1>Color Picker</h1>
            <div className="colorDisplay" style={{backgroundColor:color}}>
                <h2>{color}</h2>
            </div>
            <input type="color" name="colorPicker" id="colorPicker" onChange={handleColorChage} />
        </div>
    );
}

export default ColorPicker