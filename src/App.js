import React, { useState } from 'react'
// import Accordion from './components/Accordion'
// import Search from './components/Search'
import Dropdown from './components/Dropdown'

const items = [
  {
    title: "What is React?",
    content: "React is a front end JavaScrpt library"
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library"
  },
  {
    title: "How do you React?",
    content: "You use React by creating components"
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Shade of Blue',
    value: 'blue',
  }
]

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  )
}

export default App