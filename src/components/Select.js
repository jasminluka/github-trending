import React from 'react'

const Select = ({ title, id, options, selectedOption, setSelectedOption }) => {
  return (
    <div className='select flex space-between'>
      <label htmlFor={id}>{title}:</label>

      <select
        id={id}
        value={selectedOption}
        onChange={e => setSelectedOption(e.target.value)}
      >
        {
          selectedOption && <option value={''}>Clear {title}...</option>
        }
        {
          !selectedOption && id !== 'dateRange' && <option value={''}>Any</option>
        }
        {
          options.map(option => (
            <option key={option.id} value={option.value}>{option.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Select