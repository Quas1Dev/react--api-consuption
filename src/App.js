import React from 'react'

export default function App(){
  // This represents the state of this component somehow
  // In this case, the state is set to be whatever is returned by the API
  let [starWarsData, setStarWarsData] = React.useState({})

  // This shows that we have an infinity loop *
  console.log("Component rendered")

  // Fetch information on Star Wars
  fetch("https://swapi.dev/api/people/")
        .then(res => res.json())
        .then(data => setStarWarsData(data))

  return (
    <div>
      {/* Transform JSON object into an String and display it. */}
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}

// * The infinity loop is duo to how React handles changes on the state of a
// component. Always a state is changed, React rerender the entire component
// to reflect the changes. Therefore, always we fetch the API we are triggering
// React to rerender the component. As that happens a new fetch to the API
// is triggered, which cause the omponent to be rendered again, and so on.
