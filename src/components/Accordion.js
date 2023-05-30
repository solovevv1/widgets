import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

// Helper function for onClick event in the title
  const onTitleClick = (index) => {
    // console.log("Clicked", index);
    setActiveIndex(index);
  }

// Destructure the items using the "map" method
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : ''
    return <React.Fragment key={item.title}>
      <div className={`title + ${active}`}
        onClick={() => onTitleClick(index)}>
        <i className='dropdown icon'></i>{item.title}</div>
      <div className={'content' + active}>{item.content}</div>
    </React.Fragment>
  });

  return (
    <div className='ui styled accordion'>
      {renderedItems}
    </div>
  )
}

export default Accordion;