import React, { useState } from 'react'

import './Select.css'

const Select = (props) => {
  const [activeOption, setActiveOption] = useState(props.activeOption)

  const selectOption = (name) => () => {
    setActiveOption(name)
  }

  return (
    <nav>
      <ul>
        {props.options.map(option => (
          <li
            key={option.name}
            className={activeOption === option.name ? 'active' : 'option'}
            onClick={selectOption(option.name)}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Select
