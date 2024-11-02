function App()
{
  const cities = ["Chennai","Hyderabad","Vijayawada","Vizag","Kolkatha","Bombay","Turuvanthapuram"]

  const listItems = cities.map((city,index)=>
            <li key={index}>{city}</li>
  )

  return(
    <>
    <h1>Popular Cities</h1>
    <p>{cities}</p>
    <ul>{listItems}</ul>
    <ol>{listItems}</ol>
    <p>First City: {cities[0]}</p>
    <p>Last City: {cities[cities.length-1]}</p>
    <p>Cities Length: {cities.length}</p>

    </>
  )
}

export default App;