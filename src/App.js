import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'

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

const App = () => {

  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  )
}

export default App