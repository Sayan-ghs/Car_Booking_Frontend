import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props)

  const locations = [
    '84,Vidyasagar Sarani, Ghoshpara, Bally, Howrah',
    '85,Vivekananda Sarani, Ghoshpara, Bally, Howrah',
    '86,Rabindra Sarani, Ghoshpara, Bally, Howrah',
    '84A, MA kali Sarani, Ghoshpara, Bally, Howrah'
  ]
  return (
    <div>

      {
        locations.map(function(elem,idx){
        return <div key={idx} onClick={()=>{
          props.setVehiclePanel(true)
          props.setPanelOpen(false)
        }} className='flex gap-4 border-gray-100 active:border-black p-3 items-center my-2 justify-start'>
        <h2 className='bg-[#eee] h-8 w-16 flex items-center justify-center rounded-full'><i className="ri-map-pin-line"></i></h2>
        <h4 className='font-medium'>
          {elem}
        </h4>
        </div>
        })
      }
      </div>
  )
}

export default LocationSearchPanel
