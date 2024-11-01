export function Friends()
{
    const familyFriends = ["Chandu","Chandra","Bose"]
    const schoolFriends = ["Sandhya","Divya","Priyanka"]
    const friends = [...familyFriends,...schoolFriends,"Sai","Pavan","Madhu","Anwar","Gaffor"]

    const res = friends.map((friend,index)=>
                (<li key={index}>{friend}</li>))
    return(
        <>
        <h1>Friends...</h1>
        <ul>{res}</ul>
        </>
    )
}