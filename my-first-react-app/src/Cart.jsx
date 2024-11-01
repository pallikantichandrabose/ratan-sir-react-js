export function Cart()
{
    const items = [
        {title: "Cabbage", cate: "Veg", id: 1},
        {title: "Chicken", cate: "Non-Veg", id: 2},
        {title: "Garlic", cate: "Veg", id: 3},
        {title: "Beaf", cate: "Non-Veg", id: 4},
        {title: "Apple", cate: "Veg", id: 5},
        {title: "Fish", cate: "Non-Veg", id: 6},
        {title: "Spinch", cate: "Veg", id: 7}
    ]
        const vegItems =items.filter(item => item.cate=="Veg");
        const nonVegItems =items.filter(item => item.cate=="Non-Veg");
        
        // printing the details 
        const vegItems1 = vegItems.map(item =>
                <li key={item.id} style={{ color:'green'}}>
                ItemId: {item.id} <u>Name: <strong>{item.title}</strong></u> Category: {item.cate}
                </li>
                )
        const nonVegItems1 = nonVegItems.map(item =>
            <li key={item.id} style={{ color:'rebeccapurple'}}>
                ItemId: {item.id} <u>Name: <strong>{item.title}</strong></u> Category: {item.cate}
            </li>
                )
        
        return(
            <>
            <h1 > Food Item Details </h1>
            
            {vegItems.length > 0 && nonVegItems.length === 0 && (
                <>
                <ol>{vegItems1}</ol>
                <p>non veg not available</p>
                </>
            )}
            
            {nonVegItems.length > 0 && vegItems.length === 0 && (
                <>
                <ol>{nonVegItems1}</ol>
                <p> veg not available</p>
                </>
            )}
            
            {vegItems.length > 0 && nonVegItems.length > 0 && (
                <>
                <p>Both Veg and Non-Veg items are available.</p>
                <ol>{vegItems1}</ol>
                <ol>{nonVegItems1}</ol>
                </>
            )}
            
            {vegItems.length === 0 && nonVegItems.length === 0 && (
                <p>No items are available.</p>
                
            )}
            
            </>
        )
        
        
        
}
        