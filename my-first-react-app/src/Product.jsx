export function Product()
{
    const products = [
        {id:1001,name:"sugar",price:40},
        {id:1002,name:"salt",price:20},
        {id:1003,name:"red chili powder",price:300},
        {id:1001,name:"chintapandu",price:240}
    ]

    const withquantityproducts = products.map(product=>
    ({...product,quantity:10})
    )

    const finalProductsList = withquantityproducts.map(product=>
                        (<li key={product.id}>proId {product.id} proName <strong>{product.name}</strong> proPrice <mark>{product.price}</mark> proQantity {product.quantity}</li>)
    )

    return(
        <>
        <h1>Products List...</h1>
        <ul>{finalProductsList}</ul>
        </>
    )
}