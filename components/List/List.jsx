function List(props) {
    //const columns = ['A','C','D','B','E']
    //const copyColumns = columns.sort().map(column => <li>{column}</li>)
    
    // const mobiles = [
    //     {id:1, brand: "Motorola", price: 13000},
    //     {id:2, brand: "Samsung", price: 20000},
    //     {id:3, brand: "Iphone", price: 60000},
    //     {id:4, brand: "Nothing", price: 45000},
    //     {id:5, brand: "G-Pixel", price: 130000}
    // ];

    //mobiles.sort((a,b) => a.brand.localeCompare(b.brand)) //assending
    //mobiles.sort((a,b) => b.brand.localeCompare(a.brand)) //desending
    //mobiles.sort((a,b) => a.price - b.price); //numaric
    //mobiles.sort((a,b) => b.price - a.price); //reverse numaric

    // const filteredMobils = mobiles.filter(mobile => mobile.price >22000)
    // const selectedMobiles = filteredMobils.map(mobile =>
    //      <li key={mobile.id}>
    //         {mobile.brand}: &nbsp; {mobile.price}
    //     </li>)
    //-----------------------------------------------------------------------

    const items = props.items;
    //const assendingOrderItems = items.sort((a,b) => a.brand.localeCompare(b.brand)) //assending
    const higestPriceOrder = items.sort((a,b) => b.price - a.price); //higest price

    const filteredItems = higestPriceOrder.filter(item => item.price >0) //use price 2200
    const selectedItems = filteredItems.map(item =>
        // <li key={item.id}>
        //     {item.brand}: &nbsp; {item.price}
        // </li>
        <tr>
            <td key={item.id}>{item.brand}</td>
            <td>{item.price}</td>
        </tr>
    );
    return(
        <div className="List">
            {/* <ul>{selectedMobiles}</ul> */}
            <h2>{props.catagoury}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedItems} <br/>
                </tbody>
            </table>
        </div>
    );
}

export default List
