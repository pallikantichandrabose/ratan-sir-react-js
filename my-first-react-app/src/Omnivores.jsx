export function Omnivores()
{
    const items = [
        {id:1001,name:"Chicken",category:"Non-Veg"},
        {id:1002,name:"Tomoto",category:"Veg"},
        {id:1003,name:"Mutton",category:"Non-Veg"},
        {id:1004,name:"Potato",category:"Veg"},
        {id:1005,name:"Fish",category:"Non-Veg"}
    ]

    const products = items.map(item=>
                <li key={item.id} style={{color:item.category=="Veg"?"green":"rebeccapurple"}}>Product Name: <strong>{item.name}</strong></li>
    )

    return(
        <>
        <h1>List of Products</h1>
        <ul>{products}</ul>
        </>
    )
}