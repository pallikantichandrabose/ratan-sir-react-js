export function Books()
{
    const books = [
        {id:1001,name:"Core Java",author:"Ratan Sir"},
        {id:1002,name:"Spring Boot",author:"Chandu"},
        {id:1003,name:"React",author:"Chandra"},
        {id:1004,name:"JavaScript",author:"Bose"},
        {id:1005,name:"HTML",author:"Sandhya"}
    ]

    const bookList = books.map(book=>
                    <li key={book.id}>ID :{book.id}, Book Name :<strong>{book.name}</strong>, Book Author :{book.author}</li>
    )

    return(
        <>
        <h1>Book List...</h1>
        <ol>{bookList}</ol>
        </>
    )
}