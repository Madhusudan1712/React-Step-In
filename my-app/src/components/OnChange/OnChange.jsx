import { useState } from "react"

function OnChange(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState("");
    const [comment, setComment] = useState("");
    const [paymentType, setPaymentType] = useState("");
    const [shipingType, setShipingType] = useState("");

    const handelNameChange = (e) => {
        setName(e.target.value)
    }
    const handelQuantityChange = (e) => {
        setQuantity(e.target.value)
    }
    const handelCommentChange = (e) => {
        setComment(e.target.value)
    }
    const handelPaymentTypeChange = (e) => {
        setPaymentType(e.target.value)
    }
    const handelShipingTypeTypeChange = (e) => {
        setShipingType(e.target.value)
    }

    return(
        <form action="submit">
            <p>Name: {name}</p>
            <input value={name} onChange={handelNameChange}></input>

            <p>Quantity: {quantity}</p>
            <input value={quantity} onChange={handelQuantityChange} type="number"></input>

            <p>Comment: {comment}</p>
            <textarea value={comment} onChange={handelCommentChange} name="comment" id="comments">
                {comment}
            </textarea><br />

            <p>Payment Type: {paymentType}</p>
            <select value={paymentType} onChange={handelPaymentTypeChange} name="comment" id="comments">
                <option value="">Select payment type</option>
                <option value="UPI">UPI</option>
                <option value="Card">Card</option>
                <option value="Cash">Cash</option>
            </select>

            <p>Shiping type: {shipingType}</p>
            <input 
                type="radio" 
                value="Pick Up" 
                checked={shipingType==="Pick Up"}
                onChange={handelShipingTypeTypeChange}
            /> Pick Up <br />
            <input 
                type="radio" 
                value="Delivery"
                checked={shipingType==="Delivery"} 
                onChange={handelShipingTypeTypeChange}
            /> Delivery <br />
        </form>
    )
}

export default OnChange