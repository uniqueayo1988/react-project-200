import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  // data.push({id: 12, name: 'ade', age: 25, image: 'ade'})

  const [people, setPeople] = useState(data)

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  )
}

export default App;
