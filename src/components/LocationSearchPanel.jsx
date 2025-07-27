import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props)

  return (
    <div>
      {Array.isArray(props.suggestions.suggestion) && props.suggestions.suggestion.map((loc, idx) => {
        return (
          <div
            key={idx}
            onClick={() => props.onSelect(loc)}
            className='flex gap-4 border-gray-100 hover:border-black p-3 items-center my-2 justify-start'
          >
            <h2 className='bg-[#eee] h-8 w-16 flex items-center justify-center rounded-full'>
              <i className="ri-map-pin-line"></i>
            </h2>
            <h4 className='font-medium'>{loc.displayName}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default LocationSearchPanel

