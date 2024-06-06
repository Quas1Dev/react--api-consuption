import React, {useState, useEffect} from 'react'

export default function App(){
  // This represents the state of this component somehow
  // In this case, the state is set to be whatever is returned by the API
  let [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = React.useState(0)

  // This help us know how many times the component is being rendered
  console.log("Component rendered")

  // Set a side effect (some code that act outside what Reacts may handle)
  // that will run after the component is rendered. It can run everytime after
  // the component is rendered, or be triggered by the change on a state (e.g,
  // the count state shown here), or only after the first rendering process.
  useEffect(()=>{
    // Fetch information on Star Wars
    fetch("https://swapi.dev/api/people/")
    .then(res => res.json())
    .then(data => setStarWarsData(data))
  }, [count])

  return (
    <div>
      {/* Transform JSON object into an String and display it. */}
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
    </div>
  )
}
